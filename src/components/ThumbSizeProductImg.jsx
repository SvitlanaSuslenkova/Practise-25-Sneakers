import ProductInfo from "../components/ProductInfo";

function ThumbSizeProductImg({ idProduct, indexImage, setIndexImage }) {
  return (
    <div className="thumb-size-images">
      {ProductInfo[idProduct].images.thumbnailSize.map((image, index) => (
        <div
          className={
            index == indexImage
              ? "thumb-image-container thumb-image-container-active"
              : "thumb-image-container"
          }
          key={index}
        >
          <img
            key={index}
            src={image}
            className={
              index == indexImage
                ? "thumb-image thumb-image-white"
                : "thumb-image"
            }
            alt="product image"
            value={index}
            onClick={() => setIndexImage(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default ThumbSizeProductImg;
