import { Link } from "react-router-dom";
import { useState } from "react";

function CartPage({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  const [ordered, setOrdered] = useState(false);

  let total = 0;

  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  if (ordered) {
    return (
      <div className="cart-page">
        <h1>Order Placed Successfully!</h1>

        <p>Thank you for shopping with us.</p>

        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <Link to="/">
            <button>Go to Products</button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h2>{item.name}</h2>
                <p>Price: ₹{item.price}</p>
              </div>

              <div className="quantity">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <p>
                Total: ₹{item.price * item.quantity}
              </p>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="grand-total">
            Grand Total: ₹{total}
          </h2>

          <button
            className="checkout-button"
            onClick={() => setOrdered(true)}
          >
            Checkout
          </button>
        </div>
      )}

      <Link to="/">
        <button className="back-button">
          Back to Products
        </button>
      </Link>
    </div>
  );
}

export default CartPage;