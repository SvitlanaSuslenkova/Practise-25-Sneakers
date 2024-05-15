import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import IconCart from "../assets/icon-cart.svg";
import IconMenu from "../assets/icon-menu.svg";
import ImgAvatar from "../assets/image-avatar.png";
import Logo from "../assets/logo.svg";
import IconHeartPink from "../assets/icons8-heart-pink.png";
import IconHeartRed from "../assets/icons8-heart-red.png";
import SmallCartDiv from "../components/SmallCartDiv";
import SmallWishDiv from "../components/SmallWishDiv";
import "./Header.css";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishCart, setOpenWishCart] = useState(false);

  const product = useSelector((state) => state.product);
  const wishproduct = useSelector((state) => state.wishproduct);
  const [cartLength, setCartLength] = useState();
  const [wishCartLength, setWishCartLength] = useState();
  useEffect(() => {
    setCartLength(product.length);
  }, [product]);
  useEffect(() => {
    setWishCartLength(wishproduct.length);
  }, [wishproduct]);

  const handleIconMenu = () => {
    setMobileMenu(true);
  };
  const handleCloseMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <header>
        <button className="icon-menu-button">
          <img
            src={IconMenu}
            className="icon-menu"
            alt="menu"
            onClick={handleIconMenu}
          />
        </button>
        <NavLink className="logoLink">
          <img src={Logo} className="logo" alt="sneakers" />
        </NavLink>

        <NavBar mobileMenu={mobileMenu} onClick={handleCloseMenu} />

        <button
          onClick={() => {
            setOpenCart(!openCart);
            setOpenWishCart(false);
          }}
        >
          <img src={IconCart} className="icon-cart" alt="cart" />
          {cartLength > 0 && <div className="cart-length">{cartLength}</div>}
        </button>

        <button
          onClick={() => {
            setOpenWishCart(!openWishCart);
            setOpenCart(false);
          }}
        >
          {wishCartLength > 0 ? (
            <img src={IconHeartRed} className="icon-heart" alt="wish list" />
          ) : (
            <img src={IconHeartPink} className="icon-heart" alt="wish list" />
          )}
        </button>
        <NavLink>
          <img
            src={ImgAvatar}
            className="img-avatar"
            title="your profile"
            alt="profile"
          />{" "}
        </NavLink>
      </header>
      <div className="divider"></div>
      {openCart && <SmallCartDiv />}
      {openWishCart && <SmallWishDiv />}
    </>
  );
}

export default Header;
