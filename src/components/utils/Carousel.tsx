import { FC, useRef, useEffect, useState } from "react";
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
  adaptToImages = true // Por defecto, adaptarse a las imágenes
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imagesDimensions, setImagesDimensions] = useState<{width: number, height: number}[]>([]);
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

  // Función para manejar el cambio de slide
  const slide = (direction: number) => {
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
  };

  // Ir directamente a un slide específico
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Manejo de eventos táctiles para deslizar en móviles
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

  // Manejadores de botones dedicados para garantizar correcto funcionamiento
  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita propagación a otros elementos
    slide(-1);
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita propagación a otros elementos
    slide(1);
  };

  // Extraer el carousel a una función para reutilizarlo
  const renderCarousel = () => (
    <div 
      className={`relative overflow-hidden ${adaptToImages ? 'w-auto' : 'w-full h-full'} ${classNames?.carousel || ""}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Contenedor de slides */}
      <div 
        ref={carouselRef}
        className={`flex snap-x snap-mandatory overflow-x-hidden ${
          adaptToImages ? 'h-auto' : 'w-full h-full'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {slideImgLst.map((img, index) => (
          <div 
            key={`slide-${index}`}
            className={`flex-shrink-0 snap-center ${
              adaptToImages ? 'w-auto max-w-full' : 'w-full'
            } ${classNames?.carouselItem || ""}`}
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className={`relative flex flex-col justify-center ${
              adaptToImages ? 'h-auto' : 'h-full w-full'
            }`}>
              <img 
                src={img} 
                className={`${adaptToImages ? 'max-w-full h-auto' : 'w-full h-full object-cover'}`} 
                alt={`Slide ${index + 1}`}
                loading="lazy"
                onLoad={(e) => adaptToImages && handleImageLoad(e, index)}
              />
              {slideContentLst && slideContentLst[index] && (
                <div className={`absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white ${classNames?.content || ""}`}>
                  {slideContentLst[index]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación - CORREGIDOS */}
      <button 
        type="button"
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-20 rounded-full w-10 h-10 flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 text-black transition-all border border-gray-300 cursor-pointer ${classNames?.buttonL || ""}`} 
        onClick={handlePrevClick}
        aria-label="Slide anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        type="button"
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-20 rounded-full w-10 h-10 flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 text-black transition-all border border-gray-300 cursor-pointer ${classNames?.buttonR || ""}`} 
        onClick={handleNextClick}
        aria-label="Slide siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicadores de posición */}
      {showIndicators && (
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 ${classNames?.indicators || ""}`}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              type="button"
              key={`indicator-${index}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentIndex 
                  ? `bg-white ${classNames?.activeIndicator || ""}` 
                  : `bg-white bg-opacity-50 hover:bg-opacity-75 ${classNames?.indicator || ""}`
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
        <div className={`flex flex-col ${classNames?.contentWrapper || ""}`}>
          <div className="mb-4">{content}</div>
          {renderCarousel()}
        </div>
      );
    case 'bottom':
      return (
        <div className={`flex flex-col ${classNames?.contentWrapper || ""}`}>
          {renderCarousel()}
          <div className="mt-4">{content}</div>
        </div>
      );
    case 'left':
      return (
        <div className={`flex flex-col md:flex-row ${classNames?.contentWrapper || ""}`}>
          <div className="mb-4 md:mb-0 md:mr-4 md:w-1/3">{content}</div>
          <div className="md:w-2/3">{renderCarousel()}</div>
        </div>
      );
    case 'right':
      return (
        <div className={`flex flex-col md:flex-row ${classNames?.contentWrapper || ""}`}>
          <div className="md:w-2/3">{renderCarousel()}</div>
          <div className="mt-4 md:mt-0 md:ml-4 md:w-1/3">{content}</div>
        </div>
      );
    default:
      return renderCarousel();
  }
};

export default Carousel;