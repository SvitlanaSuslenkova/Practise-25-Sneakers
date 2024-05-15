import ProductInfo from "./ProductInfo";
import "./Recomendations.css";

function Recomendations({
  idProduct,
  setIdProduct,
  indexImage,
  setIndexImage,
  size,
  setSize,
  numberItems,
  setNumberItems,
}) {
  const filterRecomendations = ProductInfo.filter((product) => {
    return product.id !== idProduct;
  });

  return (
    <div className="recomendations-container">
      <p className="you-might-like">You might also like</p>
      <div className="recomendations-div">
        {filterRecomendations.map((product) => (
          <img
            key={product.id}
            src={product.images.fullSize[0]}
            className="product-image"
            alt="product image"
            value={product.id}
            onClick={() => {
              setIdProduct(product.id);
              setIndexImage(0);
              setNumberItems(1);
              setSize();
            }}
          />
        ))}

        <div className="empty-image-div">empty</div>
      </div>
    </div>
  );
}

export default Recomendations;
