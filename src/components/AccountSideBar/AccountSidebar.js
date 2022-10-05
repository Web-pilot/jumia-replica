import "./AccountSidebar.css";
import { Link } from "react-router-dom";
import { BsPerson, BsEnvelope, BsHeart } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { BiRevision } from "react-icons/bi";

const AccountSidebar = () => {
  return (
    <div className="side_bar">
      <ul>
        <li className="active">
          <Link to="/customer/account" className="active">
            <i>
              <BsPerson />
            </i>{" "}
            My Jumia Account
          </Link>
        </li>
        <li>
          <Link to="/customer/order/index">
            <i>
              <VscPackage />
            </i>{" "}
            Orders
          </Link>
        </li>
        <li>
          <Link to="/customer/account/inbox">
            <i>
              <BsEnvelope /> <span className="notification">2</span>
            </i>{" "}
            Inbox
          </Link>
        </li>
        <li>
          <Link to="/customer/wishlist/index">
            <i>
              <BsHeart />
            </i>{" "}
            Save Items
          </Link>
        </li>
        <li>
          <Link to="">
            <i>
              <BiRevision />
            </i>{" "}
            Recently Viewed
          </Link>
        </li>
      </ul>
      <span className="log_out_btn">LOGOUT</span>
    </div>
  );
};

export default AccountSidebar;
