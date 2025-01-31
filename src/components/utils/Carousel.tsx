import { FC, useRef, useEffect, useState } from "react";
import './Carousel.css';

type Props = {
    //children?: React.ReactNode;
    slideImgLst: string[];
    slideContentLst?: any[];
    classNames?: {
        carousel?: string;
        carouselItem?: string;
        buttonL?: string;
        buttonR?: string;
        content?: string;
    };
    timeInterval?: number;
}

const Carousel: FC<Props> = ({slideImgLst, classNames, timeInterval, slideContentLst}) => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [slideLst, setSlideLst] = useState<JSX.Element[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slides: JSX.Element[] = [];
        slideImgLst.forEach((img, index) => {
            /*slides.push(
                <div key={index * 1} className={"carousel-item w-full flex-shrink-0 " + classNames?.carouselItem}>
                    <img src={img} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                    <div className={"absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white " + classNames?.content}>
                        {slideContentLst? slideContentLst[index] : '' + index}
                    </div>
                </div>
            );*/
            slides.push(
                <div key={index * 1} className={"carousel-item w-full flex-shrink-0 " + classNames?.carouselItem}>
                    <div className="flex flex-col justify-center h-full w-full">
                        <img src={img} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                        <div className={"w-full p-4 bg-black bg-opacity-50 text-white " + classNames?.content}>
                            {slideContentLst? slideContentLst[index] : null}
                        </div>
                    </div>
                </div>
            );
        });
        setSlideLst(slides);
        if (timeInterval) {
            const interval = setInterval(() => slide(1), timeInterval);
            return () => clearInterval(interval);
        }
    }, []);

    const slide = (direction: number) => {
        if (carouselRef.current) {
            const width = carouselRef.current.clientWidth;
            let newIndex = currentIndex + direction;
            if (newIndex >= slideImgLst.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = slideImgLst.length - 1;
            }
            setCurrentIndex(newIndex);
            carouselRef.current.scrollTo({ left: newIndex * width, behavior: 'smooth' });
        }
    }

    return (
        <div className={"relative w-full h-full overflow-hidden " + classNames?.carousel}>
            <div ref={carouselRef} className="carousel flex transition-transform duration-500 ease-in-out h-full">
                {slideLst}
            </div>
            <button className={'absolute top-1/2 left-0 transform -translate-y-1/2 ' + (classNames?.buttonL || "bg-gray-800 text-white p-2 cursor-pointer")} onClick={() => slide(-1)}>
                &#10094;
            </button>
            <button className={'absolute top-1/2 right-0 transform -translate-y-1/2 ' + (classNames?.buttonR || "bg-gray-800 text-white p-2 cursor-pointer")} onClick={() => slide(1)}>
                &#10095;
            </button>
        </div>
    )
}

export default Carousel;