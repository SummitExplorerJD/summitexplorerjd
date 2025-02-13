import { FC, ReactNode } from "react";

interface MasonryProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
}

const Masonry: FC<MasonryProps> = ({ children, columns = 3, gap = 4 }) => {
  const masonryStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
    gridAutoRows: 'minmax(100px, auto)',
  };

  return (
    <div style={masonryStyle}>
      {children}
    </div>
  );
};

interface MasonryItemProps {
  children: ReactNode;
  span?: number;
}

const MasonryItem: FC<MasonryItemProps> = ({ children, span = 1 }) => {
  const itemStyle = {
    gridColumn: `span ${span}`,
  };

  return (
    <div style={itemStyle}>
      {children}
    </div>
  );
};

export { Masonry, MasonryItem };