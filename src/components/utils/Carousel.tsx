import { FC, useRef, useEffect, useState, useCallback } from "react";
import './Carousel.css';

export interface CarouselProps {
    slideImgLst: string[];
    slideContentLst?: React.ReactNode[];
    content?: React.ReactNode;
    contentPosition?: 'top' | 'bottom' | 'left' | 'right';
    classNames?: {
        carousel?: string;
        carouselItem?: string;
        buttonL?: string;
        buttonR?: string;
        content?: string;
        contentWrapper?: string;
        indicators?: string;
        indicator?: string;
        activeIndicator?: string;
    };
    timeInterval?: number;
    showIndicators?: boolean;
    pauseOnHover?: boolean;
    adaptToImages?: boolean;
    loadingIndicator?: React.ReactNode;
    onAllImagesLoaded?: () => void;
}

const Carousel: FC<CarouselProps> = ({
    slideImgLst,
    slideContentLst,
    content,
    contentPosition = 'bottom',
    classNames,
    timeInterval = 5000,
    showIndicators = true,
    pauseOnHover = true,
    adaptToImages = true,
    loadingIndicator,
    onAllImagesLoaded
}) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [imageDimensions, setImageDimensions] = useState<{width: number, height: number}[]>([]);
    const totalSlides = slideImgLst?.length || 0;

    // Check if the slideImgLst is valid
    useEffect(() => {
        if (!slideImgLst || slideImgLst.length === 0) {
            console.error("Carousel: slideImgLst is empty or undefined");
            setIsLoading(false);
        }
    }, [slideImgLst]);

    // Preload images to ensure they're available and get their natural dimensions
    useEffect(() => {
        if (!slideImgLst || slideImgLst.length === 0) return;
        
        let loadedCount = 0;
        const dimensions: {width: number, height: number}[] = [];
        
        const preloadImages = slideImgLst.map((src, index) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    loadedCount++;
                    setImagesLoaded(loadedCount);
                    
                    // Store the natural dimensions of the image
                    dimensions[index] = {
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    };
                    
                    if (loadedCount === slideImgLst.length) {
                        setImageDimensions(dimensions);
                    }
                    
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${src}`);
                    loadedCount++;
                    setImagesLoaded(loadedCount);
                    
                    // Set default dimensions for failed images
                    dimensions[index] = { width: 300, height: 200 };
                    
                    if (loadedCount === slideImgLst.length) {
                        setImageDimensions(dimensions);
                    }
                    
                    resolve(); // Still resolve to continue loading others
                };
            });
        });

        Promise.all(preloadImages)
            .then(() => {
                setIsLoading(false);
                if (onAllImagesLoaded) onAllImagesLoaded();
            })
            .catch(error => {
                console.error("Error preloading images:", error);
                setIsLoading(false);
            });
    }, [slideImgLst, onAllImagesLoaded]);

    // Calculate current image dimensions based on container width
    const getCurrentImageHeight = useCallback(() => {
        if (!carouselRef.current || !adaptToImages || imageDimensions.length === 0 || !imageDimensions[currentIndex]) {
            return 'auto';
        }
        
        const containerWidth = carouselRef.current.clientWidth;
        const imgDimensions = imageDimensions[currentIndex];
        
        // Calculate proportional height based on container width
        const aspectRatio = imgDimensions.width / imgDimensions.height;
        const calculatedHeight = containerWidth / aspectRatio;
        
        return `${calculatedHeight}px`;
    }, [adaptToImages, currentIndex, imageDimensions]);

    // Manual transition control
    const transitionToSlide = useCallback((index: number) => {
        if (!carouselRef.current) return;
        
        const slideWidth = carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
        });
    }, []);

    // Update slide when currentIndex changes
    useEffect(() => {
        transitionToSlide(currentIndex);
    }, [currentIndex, transitionToSlide]);

    // Autoplay with pause option
    useEffect(() => {
        if (!timeInterval || isPaused || isLoading || totalSlides <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % totalSlides);
        }, timeInterval);

        return () => clearInterval(interval);
    }, [timeInterval, isPaused, totalSlides, isLoading]);

    // Slide navigation
    const slide = useCallback((direction: number) => {
        if (totalSlides <= 1) return;
        
        setCurrentIndex(prev => {
            let newIndex = prev + direction;
            // Circular navigation
            if (newIndex >= totalSlides) newIndex = 0;
            if (newIndex < 0) newIndex = totalSlides - 1;
            return newIndex;
        });
    }, [totalSlides]);

    // Touch event handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        
        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;

        // Only change slide if swipe is significant
        if (Math.abs(diff) > 50) {
            slide(diff > 0 ? 1 : -1);
            setTouchStart(null); // Reset to prevent multiple slides
        }
    };

    const handleTouchEnd = () => {
        setTouchStart(null);
    };

    // Button handlers
    const handlePrevClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        slide(-1);
    }, [slide]);

    const handleNextClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        slide(1);
    }, [slide]);

    // Keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            slide(-1);
        } else if (e.key === 'ArrowRight') {
            slide(1);
        }
    }, [slide]);

    // Button icons
    const PrevIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const NextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Show loading indicator
    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-40">
                {loadingIndicator || (
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        <p className="mt-2 text-gray-600">Loading images {imagesLoaded}/{totalSlides}</p>
                    </div>
                )}
            </div>
        );
    }

    // If no slides, show a message
    if (!slideImgLst || slideImgLst.length === 0) {
        return <div className="p-4 text-center text-gray-500">No images to display</div>;
    }

    // Carousel component
    const renderCarousel = () => {
        const carouselHeight = adaptToImages ? getCurrentImageHeight() : 'auto';
        
        return (
            <div
                className={`relative overflow-hidden ${classNames?.carousel ?? ""}`}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="region"
                aria-label="Image carousel"
                style={{ height: carouselHeight }}
            >
                {/* Slides container */}
                <div
                    ref={carouselRef}
                    className="flex w-full h-full overflow-x-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {slideImgLst.map((img, index) => (
                        <div
                            key={`slide-${index}`}
                            className={`flex-shrink-0 w-full ${classNames?.carouselItem ?? ""}`}
                            role="tabpanel"
                            aria-roledescription="slide"
                            aria-label={`Slide ${index + 1} of ${totalSlides}`}
                        >
                            <div className="relative h-full w-full">
                                <img
                                    src={img}
                                    className={`w-full ${adaptToImages ? 'h-full object-contain' : 'h-full object-cover'}`}
                                    alt={`Slide ${index + 1}`}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                                {slideContentLst && slideContentLst[index] && (
                                    <div className={`absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white ${classNames?.content ?? ""}`}>
                                        {slideContentLst[index]}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                {totalSlides > 1 && (
                    <>
                        <button
                            type="button"
                            className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-20 rounded-full w-10 h-10 flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 text-black transition-all border border-gray-300 ${classNames?.buttonL ?? ""}`}
                            onClick={handlePrevClick}
                            aria-label="Previous slide"
                        >
                            <PrevIcon />
                        </button>
                        <button
                            type="button"
                            className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-20 rounded-full w-10 h-10 flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 text-black transition-all border border-gray-300 ${classNames?.buttonR ?? ""}`}
                            onClick={handleNextClick}
                            aria-label="Next slide"
                        >
                            <NextIcon />
                        </button>
                    </>
                )}

                {/* Indicators */}
                {showIndicators && totalSlides > 1 && (
                    <div
                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 ${classNames?.indicators ?? ""}`}
                        role="tablist"
                    >
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                type="button"
                                key={`indicator-${index}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                role="tab"
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentIndex
                                        ? `bg-white ${classNames?.activeIndicator ?? ""}`
                                        : `bg-white bg-opacity-50 hover:bg-opacity-75 ${classNames?.indicator ?? ""}`
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    // Render according to content position
    if (!content) {
        return renderCarousel();
    }

    switch (contentPosition) {
        case 'top':
            return (
                <div className={`flex flex-col ${classNames?.contentWrapper ?? ""}`}>
                    <div className="mb-4">{content}</div>
                    {renderCarousel()}
                </div>
            );
        case 'bottom':
            return (
                <div className={`flex flex-col ${classNames?.contentWrapper ?? ""}`}>
                    {renderCarousel()}
                    <div className="mt-4">{content}</div>
                </div>
            );
        case 'left':
            return (
                <div className={`flex flex-col md:flex-row ${classNames?.contentWrapper ?? ""}`}>
                    <div className="mb-4 md:mb-0 md:mr-4 md:w-1/3">{content}</div>
                    <div className="md:w-2/3">{renderCarousel()}</div>
                </div>
            );
        case 'right':
            return (
                <div className={`flex flex-col md:flex-row ${classNames?.contentWrapper ?? ""}`}>
                    <div className="md:w-2/3">{renderCarousel()}</div>
                    <div className="mt-4 md:mt-0 md:ml-4 md:w-1/3">{content}</div>
                </div>
            );
        default:
            return renderCarousel();
    }
};

export default Carousel;