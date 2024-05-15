import { NavLink } from "react-router-dom";

function NavBar({ mobileMenu, onClick }) {
  return (
    <div className={`${mobileMenu ? "mobile-menu-open" : "main-menu"}`}>
      <div className="menu-div">
        <button className="close-menu-button" onClick={onClick}></button>
        <NavLink className="main-menu-link">Collections</NavLink>
        <NavLink className="main-menu-link">Men</NavLink>
        <NavLink className="main-menu-link">Women</NavLink>
        <NavLink className="main-menu-link">About</NavLink>
        <NavLink className="main-menu-link">Contact</NavLink>
      </div>
      <div className="transparent-div" onClick={onClick}></div>
    </div>
  );
}

export default NavBar;
