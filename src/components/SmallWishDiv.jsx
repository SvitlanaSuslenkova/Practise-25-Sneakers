import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromWishCart } from "../redux/wishproductList/actionCreators";
import ProductInfo from "./ProductInfo";
import "./SmallWishDiv.css";
import IconDelete from "../assets/icon-delete.svg";
function SmallCartDiv() {
  const wishproduct = useSelector((state) => state.wishproduct);
  const dispatch = useDispatch();
  const handleDeleteFromWishCart = (idProduct) => {
    dispatch(deleteFromWishCart(idProduct));
  };

  return (
    <div className="small-cart-div-wish">
      <p className="word-cart">Wish cart</p>
      <div className="cart-divider-wish"></div>
      {wishproduct.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="products-in-cart">
          {wishproduct.map((cartProduct, i) => {
            const numberItemsArray = () => cartProduct.numberItems.toString().split(`,`);
            const sizeArray = () => cartProduct.size.split(`,`);
            const size = () => {
              return sizeArray().map(
                (item, index) =>
                  `${item}x${Array.from(numberItemsArray())[index]}, `
              );
            };
            const number = () => {
              return Array.from(numberItemsArray()).reduce((acc, num) => {
                return acc + Number(num);
              }, 0);
            };
            console.log(number());
            console.log(Array.from(numberItemsArray()));

            return (
              <div key={i} className="one-product-in-cart">
                <img
                  src={
                    ProductInfo[cartProduct.idProduct].images.thumbnailSize[0]
                  }
                  className="cart-image"
                  alt="product image"
                />

                <p className="title-in-cart">
                  {ProductInfo[cartProduct.idProduct].title}
                </p>
                <p className="size-in-cart">size: {size()}</p>
                <p>
                  {`$${(
                    (ProductInfo[cartProduct.idProduct].price *
                      ProductInfo[cartProduct.idProduct].discountPercent) /
                    100
                  ).toFixed(2)}x${number()}` + " "}

                  <span className="result-sum-of-product">
                    {`$${(
                      ((ProductInfo[cartProduct.idProduct].price *
                        ProductInfo[cartProduct.idProduct].discountPercent) /
                        100) *
                      number()
                    ).toFixed(2)}`}
                  </span>
                </p>
                <button
                  className="delete-from-cart"
                  onClick={() =>
                    handleDeleteFromWishCart(cartProduct.idProduct)
                  }
                >
                  <img src={IconDelete} className="icon-delete" alt="delete" />
                </button>
              </div>
            );
          })}
          <button className="checkout-cart-button">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default SmallCartDiv;
