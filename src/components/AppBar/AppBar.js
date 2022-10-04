import "./AppBar.css";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AppBar = () => {
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
            <div className="user">
              <span>
                <AiOutlineUser /> <span className="hide">Account</span> <MdOutlineArrowDropDown />
              </span>
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
