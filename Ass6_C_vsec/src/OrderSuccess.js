import { Link } from "react-router-dom";

function OrderSuccess({ cart, clearCart }) {
  let total = 0;

  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  return (
    <div className="success-page">

      <div className="success-box">

        <div className="success-icon">
          ✅
        </div>

        <h1>Order Placed!</h1>

        <p>Thank you for your purchase.</p>

        <h2>Total: ₹{total}</h2>

        <Link
          to="/"
          className="shop-button"
          onClick={clearCart}
        >
          Back to Shop
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;