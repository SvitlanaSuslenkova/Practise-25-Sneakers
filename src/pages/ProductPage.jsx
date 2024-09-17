import { useState } from 'react';
import ProductInfo from '../components/ProductInfo';
import AddToCartButtons from '../components/AddToCartButtons';
import IconPrevious from '../assets/icon-previous.svg';
import IconNext from '../assets/icon-next.svg';
import ThumbSizeProductImg from '../components/ThumbSizeProductImg';
import Recomendations from '../components/Recomendations';
import SizesAvailable from '../components/SizesAvailable';
import './ProductPage.css';

function ProductPage() {
  const [openBigImage, setOpenBigImage] = useState(false);
  const [idProduct, setIdProduct] = useState(0);
  const [indexImage, setIndexImage] = useState(0);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);
  const [numberItems, setNumberItems] = useState(1);
  const [size, setSize] = useState();
  const [sizeNotSelected, setSizeNotSelected] = useState(false);

  const handleOpenBiggerImage = () => {
    setOpenBigImage(true);
  };
  const handleCloseBiggerImage = () => {
    setOpenBigImage(false);
  };
  const handleNextImage = () => {
    if (indexImage == ProductInfo[idProduct].images.fullSize.length - 1) {
      setDisabledNext(true);
    }
    if (indexImage !== ProductInfo[idProduct].images.fullSize.length - 1) {
      setDisabledNext(false);
      setIndexImage(indexImage + 1);
    }
    setDisabledNext(false);
  };
  const handlePreviousImage = () => {
    if (indexImage == 0) {
      setDisabledPrev(true);
    }
    if (indexImage !== 0) {
      setDisabledPrev(false);
      setIndexImage(indexImage - 1);
    }
    setDisabledPrev(false);
  };

  return (
    <div className="product-container">
      <div
        className={
          openBigImage ? 'main-image-container-desktop' : 'main-image-container'
        }
      >
        <button
          className="close-desktop-button"
          onClick={handleCloseBiggerImage}
        ></button>
        <button
          className={
            indexImage == 0
              ? 'previous-and-next-icons previous-icon disabled-next-prev'
              : 'previous-and-next-icons previous-icon'
          }
          onClick={handlePreviousImage}
          disabled={disabledPrev}
        >
          <img src={IconPrevious} className="icon-next-prev-img" alt="<" />
        </button>
        <button
          className={
            indexImage == ProductInfo[idProduct].images.fullSize.length - 1
              ? 'previous-and-next-icons next-icon disabled-next-prev'
              : 'previous-and-next-icons next-icon'
          }
          onClick={handleNextImage}
          disabled={disabledNext}
        >
          <img src={IconNext} className="icon-next-prev-img" alt=">" />
        </button>
        <img
          src={ProductInfo[idProduct].images.fullSize[indexImage]}
          className="product-image"
          alt="product image"
        />
        <ThumbSizeProductImg
          idProduct={idProduct}
          indexImage={indexImage}
          setIndexImage={setIndexImage}
        />
      </div>
      <div
        className={openBigImage ? 'shadow-div-desktop' : 'display-none'}
        onClick={handleCloseBiggerImage}
      ></div>
      <div className="desktop-images-container">
        <div
          className="desktop-image-container"
          onClick={handleOpenBiggerImage}
        >
          <img
            src={ProductInfo[idProduct].images.fullSize[indexImage]}
            className="product-image"
            alt="product image"
          />
        </div>

        <ThumbSizeProductImg
          idProduct={idProduct}
          indexImage={indexImage}
          setIndexImage={setIndexImage}
        />
      </div>
      <div className="product-container-text-part">
        <p className="company-name">{ProductInfo[idProduct].company}</p>
        <h1 className="product-name">{ProductInfo[idProduct].title}</h1>
        <p className="description">{ProductInfo[idProduct].description}</p>

        <SizesAvailable
          idProduct={idProduct}
          size={size}
          setSize={setSize}
          sizeNotSelected={sizeNotSelected}
          setSizeNotSelected={setSizeNotSelected}
        />

        <div className="prices-div">
          <p className="price-now">
            {`$${(
              (ProductInfo[idProduct].price *
                ProductInfo[idProduct].discountPercent) /
              100
            ).toFixed(2)}`}
          </p>
          <p className="discount">{`${ProductInfo[idProduct].discountPercent}%`}</p>
          <p className="original-price">{`$${ProductInfo[
            idProduct
          ].price.toFixed(2)}`}</p>
        </div>
        <AddToCartButtons
          idProduct={idProduct}
          numberItems={numberItems}
          setNumberItems={setNumberItems}
          size={size}
          //sizeNotSelected={sizeNotSelected}
          setSizeNotSelected={setSizeNotSelected}
        />
      </div>

      <Recomendations
        idProduct={idProduct}
        setIdProduct={setIdProduct}
        indexImage={indexImage}
        setIndexImage={setIndexImage}
        numberItems={numberItems}
        setNumberItems={setNumberItems}
        size={size}
        setSize={setSize}
      />
    </div>
  );
}

export default ProductPage;
