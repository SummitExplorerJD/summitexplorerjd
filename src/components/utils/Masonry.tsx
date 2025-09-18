import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MasonryProps {
  children: ReactNode;
  gap?: number;
  className?: string;
}

const Masonry: FC<MasonryProps> = ({ children, gap = 24, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const masonryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (masonryRef.current) {
      observer.observe(masonryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={masonryRef}
      className={`masonry-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(min(280px, 100%), 1fr))`,
        gap: `${gap}px`,
        gridAutoRows: 'minmax(120px, auto)',
        padding: '0',
      }}
    >
      {children}
    </motion.div>
  );
};

interface MasonryItemProps {
  children: ReactNode;
  span?: number;
  delay?: number;
  className?: string;
}

const MasonryItem: FC<MasonryItemProps> = ({ 
  children, 
  span = 1, 
  delay = 0,
  className = "" 
}) => {
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={itemRef}
      className={`masonry-item ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 30, 
        scale: isInView ? 1 : 0.95 
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      style={{
        gridColumn: `span ${span}`,
        height: 'fit-content',
      }}
    >
      {children}
    </motion.div>
  );
};

export { Masonry, MasonryItem };