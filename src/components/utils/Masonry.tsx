import { FC, ReactNode } from "react";
import './Masonry.css';

type Props = {
  images: string[];
}

const MasonryImg: FC<Props> = ({ images }) => {
  return (
    <div className="masonry-img">
      {images.map((src, index) => (
        <div key={index} className="masonry-img-item">
          <img src={src} alt={`masonry-img-item-${index}`} />
        </div>
      ))}
    </div>
  );
};

type PropsM = {
  contents: ReactNode[];
}

const MasonryContents: FC<PropsM> = ({ contents }) => {
  return (
    <div className="masonry-content">
      {contents.map((content, index) => (
        <div key={index} className="masonry-content-item">
          {content}
        </div>
      ))}
    </div>
  );
};

export { MasonryImg, MasonryContents };