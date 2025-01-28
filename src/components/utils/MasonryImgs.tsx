import { FC } from "react";

type Props = {
  images: string[];
}

const MasonryImgs: FC<Props> = ({ images }) => {
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

export default MasonryImgs;