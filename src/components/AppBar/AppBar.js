import "./AppBar.css";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlinePersonOutline, MdPerson } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useState } from "react";



export const AppBar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <header className="navbar">
      <nav className="container nav">
        <div className="logo">
          <Link to="/" className="hide">RealMarkt</Link>
          <Link to="/">Real</Link>
        </div>
        <div className="nav_left">
          <div className="search_form">
            <form>
              <AiOutlineSearch className="search_icon" />
              <input
                type="search"
                name=""
                id=""
                placeholder="search products, offer collection"
              />
              <button className="btn">Search</button>
            </form>
          </div>
          <div className="account_cart">
            <div className="user" onClick={() => setDropDown(!dropDown)}>
              <span>
                <AiOutlineUser /> <span className="hide">Account</span> <MdOutlineArrowDropDown />
              </span>
             {dropDown &&  <div className="dropdown">
              <MdOutlineArrowDropUp className="toparrow"/>
                <Link to="/account/sign-in" className="btn">SIGN IN</Link>
                <hr style={{marginTop: "1rem"}}/>
                <ul>
                  <li><Link to="/customer/account/"><MdPerson /> My Account </Link></li>
                  <li><Link to="/customer/orders/index"><VscPackage /> Orders </Link></li>
                  <li><Link to="/customer/wishlists/index"><AiOutlineHeart /> Saved Items </Link></li>
                </ul>
              </div>}
            </div>
            <div className="cart">
              <Link to="/cart">
                <span>
                  <BsCartPlus /> <span className="hide">Cart</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
