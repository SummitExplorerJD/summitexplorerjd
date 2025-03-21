import { FC, useRef, useEffect, useState, useCallback } from "react";
import './Carousel.css';

export interface CarouselProps {
    slideImgLst: string[];
    slideContentLst?: React.ReactNode[];
    content?: React.ReactNode; // Nuevo: contenido adicional
    contentPosition?: 'top' | 'bottom' | 'left' | 'right'; // Posición del contenido
    classNames?: {
        carousel?: string;
        carouselItem?: string;
        buttonL?: string;
        buttonR?: string;
        content?: string;
        contentWrapper?: string; // Nuevo: clase para el wrapper del contenido
        indicators?: string;
        indicator?: string;
        activeIndicator?: string;
    };
    timeInterval?: number;
    showIndicators?: boolean;
    pauseOnHover?: boolean;
    adaptToImages?: boolean; // Nueva opción para adaptarse a imágenes
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
    adaptToImages = true, // Por defecto, adaptarse a las imágenes
    loadingIndicator,
    onAllImagesLoaded
}) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [imagesDimensions, setImagesDimensions] = useState<{ width: number, height: number }[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [optimalHeight, setOptimalHeight] = useState<number | null>(null);
    const totalSlides = slideImgLst.length;

    // Manejar transición al cambiar slides
    useEffect(() => {
        if (carouselRef.current) {
            const width = carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({ left: currentIndex * width, behavior: 'smooth' });
        }
    }, [currentIndex]);

    // Autoplay con opción de pausa
    useEffect(() => {
        if (!timeInterval || isPaused) return;

        const interval = setInterval(() => {
            slide(1);
        }, timeInterval);

        return () => clearInterval(interval);
    }, [timeInterval, isPaused, currentIndex, totalSlides]);

    // Función para manejar el cambio de slide - con useCallback para evitar recreaciones innecesarias
    const slide = useCallback((direction: number) => {
        setCurrentIndex(prev => {
            let newIndex = prev + direction;

            // Manejo circular
            if (newIndex >= totalSlides) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = totalSlides - 1;
            }

            return newIndex;
        });
    }, [totalSlides]);

    // Ir directamente a un slide específico - con useCallback
    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    // Manejo de eventos táctiles mejorado
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStart) return;

        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;

        // Si el deslizamiento es significativo (> 50px), cambiamos de slide
        if (Math.abs(diff) > 50) {
            slide(diff > 0 ? 1 : -1);
            setTouchStart(0); // Resetear para evitar múltiples cambios
        }
    };

    const handleTouchEnd = () => {
        setTouchStart(0); // Resetear al terminar el toque
    };

    // Manejar carga de imágenes para obtener dimensiones
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
        const img = e.currentTarget;

        setImagesDimensions(prev => {
            const newDimensions = [...prev];
            newDimensions[index] = { width: img.naturalWidth, height: img.naturalHeight };
            return newDimensions;
        });

        setImagesLoaded(prev => prev + 1);
    };

    // Check if all images are loaded
    useEffect(() => {
        if (imagesLoaded === totalSlides && totalSlides > 0) {
            setIsLoading(false);
            if (onAllImagesLoaded) onAllImagesLoaded();

            // Calculate optimal height if adapting to images
            if (adaptToImages && imagesDimensions.length === totalSlides) {
                // Find a good height based on aspect ratios of all images
                const avgHeight = imagesDimensions.reduce((sum, dim) => {
                    const aspectRatio = dim.width / dim.height;
                    // Calculate height based on current container width
                    const containerWidth = carouselRef.current?.clientWidth ?? window.innerWidth;
                    return sum + (containerWidth / aspectRatio);
                }, 0) / imagesDimensions.length;

                setOptimalHeight(avgHeight);
            }
        }
    }, [imagesLoaded, totalSlides, adaptToImages, imagesDimensions, onAllImagesLoaded]);

    // Manejadores de botones dedicados con useCallback
    const handlePrevClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        slide(-1);
    }, [slide]);

    const handleNextClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        slide(1);
    }, [slide]);

    // Navegación por teclado
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            slide(-1);
        } else if (e.key === 'ArrowRight') {
            slide(1);
        }
    }, [slide]);

    // Iconos SVG como componentes para mayor claridad
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

    // Render loading state
    if (isLoading && adaptToImages) {
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

    // Extraer el carousel a una función para reutilizarlo
    const renderCarousel = () => (
        <div
            className={`relative overflow-hidden ${adaptToImages ? 'w-auto' : 'w-full h-full'} ${classNames?.carousel ?? ""}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Carrusel de imágenes"
        >
            {/* Contenedor de slides */}
            <div
                ref={carouselRef}
                className={`flex snap-x snap-mandatory overflow-x-hidden ${adaptToImages ? 'h-auto' : 'w-full h-full'}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={optimalHeight && adaptToImages ? { height: `${optimalHeight}px` } : {}}
            >
                {slideImgLst.map((img, index) => (
                    <div
                        key={`slide-${index * 1}`}
                        className={`flex-shrink-0 snap-center ${adaptToImages ? 'w-auto max-w-full' : 'w-full'} ${classNames?.carouselItem ?? ""}`}
                        style={{ scrollSnapAlign: 'start' }}
                        role="tabpanel"
                        aria-roledescription="slide"
                        aria-label={`Slide ${index + 1} de ${totalSlides}`}
                    >
                        <div className={`relative flex flex-col justify-center ${adaptToImages ? 'h-auto' : 'h-full w-full'}`}>
                            <img
                                src={img}
                                className={`${adaptToImages ? 'max-w-full h-auto' : 'w-full h-full object-cover'}`}
                                alt={`Slide ${index + 1}`}
                                loading="lazy"
                                onLoad={(e) => handleImageLoad(e, index)}
                                style={adaptToImages && imagesDimensions[index] ? {
                                    objectFit: 'contain',
                                    maxHeight: optimalHeight ? `${optimalHeight}px` : 'auto'
                                } : {}}
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

            {/* Progress indicator showing loading progress */}
            {imagesLoaded < totalSlides && adaptToImages && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                    <div
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `${(imagesLoaded / totalSlides) * 100}%` }}
                    ></div>
                </div>
            )}

            {/* Botones de navegación - MEJORADOS */}
            {totalSlides > 1 && (
                <>
                    <button
                        type="button"
                        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-20 rounded-full w-10 h-10 flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 text-black transition-all border border-gray-300 cursor-pointer ${classNames?.buttonL ?? ""}`}
                        onClick={handlePrevClick}
                        aria-label="Slide anterior"
                        disabled={isLoading}
                    >
                        <PrevIcon />
                    </button>
                    <button
                        type="button"
                        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-20 rounded-full w-10 h-10 flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 text-black transition-all border border-gray-300 cursor-pointer ${classNames?.buttonR ?? ""}`}
                        onClick={handleNextClick}
                        aria-label="Slide siguiente"
                        disabled={isLoading}
                    >
                        <NextIcon />
                    </button>
                </>
            )}

            {/* Indicadores de posición */}
            {showIndicators && (
                <div
                    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 ${classNames?.indicators ?? ""}`}
                    role="tablist"
                >
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            type="button"
                            key={`indicator-${index * 1}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir a slide ${index + 1}`}
                            //aria-selected={index === currentIndex ? true : false}
                            role="tab"
                            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentIndex
                                ? `bg-white ${classNames?.activeIndicator ?? ""}`
                                : `bg-white bg-opacity-50 hover:bg-opacity-75 ${classNames?.indicator ?? ""}`
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );

    // Si no hay contenido adicional, simplemente renderiza el carousel
    if (!content) {
        return renderCarousel();
    }

    // Renderizar según la posición del contenido
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