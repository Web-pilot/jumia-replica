import "./Account.css";
import {Link} from "react-router-dom";
import {BsPerson, BsEnvelope,BsHeart,} from 'react-icons/bs'
import { VscPackage } from "react-icons/vsc";
import { BiRevision } from "react-icons/bi";
import AccountGrids from "../Grids/AccountGrids/AccountGrids";


const Account = () => {
  return (
    <section className="container account_container">
        <div className="side_bar">
          <ul>
            <li className="active"><Link to="" className="active"><i><BsPerson /></i> My Jumia Account</Link></li>
            <li><Link to=""><i><VscPackage/></i> Orders</Link></li>
            <li><Link to=""><i><BsEnvelope /></i> Inbox</Link></li>
            <li><Link to=""><i><BsHeart /></i> Save Items</Link></li>
            <li><Link to=""><i><BiRevision /></i> Recently Viewed</Link></li>
          </ul>
          <span className="log_out_btn">LOGOUT</span>
        </div>
        <div className="main_content">
          <h3 className="main_content_title">Account Overview</h3>
          <div className="grids">
            <AccountGrids />
            <AccountGrids />
            <AccountGrids />
            <AccountGrids />
          </div>
        </div>
    </section>
  )
}

export default Account