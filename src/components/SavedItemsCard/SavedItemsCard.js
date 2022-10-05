import { Link } from "react-router-dom";
import "./SavedItemsCard.css";

const SavedItemsCard = () => {
return (
    <div className="order_card">
    <img
      src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/89/762414/1.jpg?2533"
      alt=""
    />
    <div className="content_details">
      <div className="content_details_heading">
        <h5>Pen Flash Drive 3.0 64GB - Metal OTG Micro USB Type-C</h5>
        <div className="action_container">
            <Link to="/" className="btn">BUY NOW</Link>
        </div>
      </div>
      <span className="order_id">Order 1962961342</span>
    <br />
    <span className="variation">Variation: </span>64G
    <br />
    <span className="order_status_badge">DELIVERED</span>
    <br />
    <span className="order_date">On 25-08</span>
    </div>
  </div>
)
}

export default SavedItemsCard;