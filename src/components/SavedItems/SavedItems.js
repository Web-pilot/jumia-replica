import "./SavedItems.css";
import OrderCard from "../SuccessOrdersCard/SuccessOrders";

const SavedItems = () => {
  return (
    <section className="container account_container">
      <AccountSidebar />
      <div className="main_content save_items">
        <h4>Saved Items</h4>
        
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </section>
  )
}

export default SavedItems