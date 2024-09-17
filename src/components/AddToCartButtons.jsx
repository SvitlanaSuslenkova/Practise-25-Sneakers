import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productLists/actionCreators';
import { addToWishCart } from '../redux/wishproductList/actionCreators';
import Minus from '../assets/icon-minus.svg';
import Plus from '../assets/icon-plus.svg';
import Cart from '../assets/icon-cart.svg';
import Heart from '../assets/icons8-heart-48.png';
import './AddToCartButtons.css';

function AddToCartButtons({
  idProduct,
  numberItems,
  setNumberItems,
  size,
  //sizeNotSelected,
  setSizeNotSelected,
}) {
  const dispatch = useDispatch();
  const handleCart = (e) => {
    e.preventDefault();

    if (size !== undefined) {
      dispatch(addToCart(idProduct, numberItems, size));
      console.log(addToCart(idProduct, numberItems, size));
    } else setSizeNotSelected(true);
  };

  const handleWishList = (e) => {
    e.preventDefault();
    if (size !== undefined) {
      dispatch(addToWishCart(idProduct, numberItems, size));
      console.log(addToWishCart(idProduct, numberItems, size));
    } else setSizeNotSelected(true);
  };

  const handleMinusItem = (e) => {
    e.preventDefault();
    setNumberItems(numberItems - 1);
    if (numberItems == 1) {
      setNumberItems(1);
    }
  };
  const handlePlusItem = (e) => {
    e.preventDefault();
    setNumberItems(numberItems + 1);
  };

  return (
    <form action="" className="add-to-cart-form">
      <div className="plus-minus-div">
        <button onClick={handleMinusItem}>
          <img src={Minus} className="plus-minus-button" alt="-" />
        </button>
        <p className="result-of-plus-minus">{numberItems}</p>
        <button onClick={handlePlusItem}>
          <img src={Plus} className="plus-minus-button" alt="+" />
        </button>
      </div>
      <button className="add-to-cart-button" onClick={handleCart}>
        <img src={Cart} className="add-to-cart-icon" alt="" /> Add to cart
      </button>
      <button className="add-to-wish-list-button" onClick={handleWishList}>
        <img src={Heart} className="add-to-wish-list-icon" alt="" /> Add to wish
        list
      </button>
    </form>
  );
}

export default AddToCartButtons;
