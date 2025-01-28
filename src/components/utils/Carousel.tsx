import { FC, useRef, useEffect, useState } from "react";
import './Carousel.css';

type Props = {
    //children?: React.ReactNode;
    slideImgLst: string[];
    classNames?: {
        carousel?: string;
        carouselItem?: string;
        buttonL?: string;
        buttonR?: string;
    };
    timeInterval?: number;
}

const Carousel: FC<Props> = (props) => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [slideLst, setSlideLst] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const slides: JSX.Element[] = [];
        const { slideImgLst, timeInterval } = props;
        slideImgLst.forEach((img, index) => {
            slides.push(
                <div key={index * 1} className={"carousel-item w-full flex-shrink-0 " + props.classNames?.carouselItem}>
                    <img src={img} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
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
            carouselRef.current.scrollBy({ left: direction * width, behavior: 'smooth' });
        }
    }

    return (
        <div className={"relative w-full h-full overflow-hidden " + props.classNames?.carousel}>
            <div ref={carouselRef} className="carousel flex transition-transform duration-500 ease-in-out">
                {slideLst}
            </div>
            <button className={'absolute top-1/2 left-0 transform -translate-y-1/2 ' + (props.classNames?.buttonL || "bg-gray-800 text-white p-2 cursor-pointer")} onClick={() => slide(-1)}>
                &#10094;
            </button>
            <button className={'absolute top-1/2 right-0 transform -translate-y-1/2 ' + (props.classNames?.buttonR || "bg-gray-800 text-white p-2 cursor-pointer")} onClick={() => slide(1)}>
                &#10095;
            </button>
        </div>
    )
}

export default Carousel;