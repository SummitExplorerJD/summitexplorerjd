import React, { useState, useEffect, useRef } from 'react';
import './Wheel.css';

interface WheelProps {
  items: Array<React.ReactNode>;
}

const Wheel: React.FC<WheelProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!isAnimating && wheelRef.current) {
      setIsDragging(true);
      dragStartX.current = event.clientX;
      dragStartY.current = event.clientY;
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && !isAnimating && wheelRef.current) {
      const deltaX = event.clientX - dragStartX.current;
      const deltaY = event.clientY - dragStartY.current;
      const delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

      if (Math.abs(delta) > 30) { // Umbral mínimo para el arrastre
        setIsAnimating(true);
        setActiveIndex((prevIndex) => {
          const newIndex = (prevIndex + (delta > 0 ? 1 : -1) + items.length) % items.length;
          return newIndex;
        });

        dragStartX.current = event.clientX;
        dragStartY.current = event.clientY;

        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = (event: WheelEvent) => {
    if (!isAnimating && !isDragging && wheelRef.current) {
      event.preventDefault();
      setIsAnimating(true);
      lastScrollPosition.current = window.scrollY;

      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + (event.deltaY > 0 ? 1 : -1) + items.length) % items.length;
        return newIndex;
      });

      setTimeout(() => {
        setIsAnimating(false);
        window.scrollTo({
          top: lastScrollPosition.current + (event.deltaY > 0 ? 100 : -100),
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!isAnimating && wheelRef.current) {
      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 20) { // umbral mínimo para detectar el swipe
        event.preventDefault();
        setIsAnimating(true);

        setActiveIndex((prevIndex) => {
          const newIndex = (prevIndex + (deltaY > 0 ? 1 : -1) + items.length) % items.length;
          return newIndex;
        });

        setTimeout(() => {
          setIsAnimating(false);
        }, 300);

        touchStartY.current = touchEndY;
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('wheel', handleScroll, { passive: false });
          wheelRef.current?.addEventListener('touchstart', handleTouchStart, { passive: true });
          wheelRef.current?.addEventListener('touchmove', handleTouchMove, { passive: false });
        } else {
          window.removeEventListener('wheel', handleScroll);
          wheelRef.current?.removeEventListener('touchstart', handleTouchStart);
          wheelRef.current?.removeEventListener('touchmove', handleTouchMove);
        }
      },
      { threshold: 0.5 }
    );

    if (wheelRef.current) {
      observer.observe(wheelRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (wheelRef.current) {
        observer.unobserve(wheelRef.current);
        wheelRef.current.removeEventListener('touchstart', handleTouchStart);
        wheelRef.current.removeEventListener('touchmove', handleTouchMove);
      }
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isAnimating, items.length, isDragging]);

  return (
    <div
      ref={wheelRef}
      className={`wheel ${isDragging ? 'dragging' : ''}`}
      onMouseDown={handleMouseDown}
    >
      {items.map((item, index) => {
        const angle = (index - activeIndex) * (360 / items.length);
        return (
          <div
            key={index}
            className={`wheel-item ${index === activeIndex ? 'active' : ''}`}
            style={{
              transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
              transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Wheel;