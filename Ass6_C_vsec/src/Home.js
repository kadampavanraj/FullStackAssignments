import { Link } from "react-router-dom";
import Product from "./Product";

function Home({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1200
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1800
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1000
    },
    {
      id: 4,
      name: "Power Bank",
      price: 800
    }
  ];

  return (
    <div className="container">
      <h1>Simple Shopping Cart</h1>

      <p className="subtitle">
        Choose your products
      </p>

      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Link to="/cart">
        <button className="cart-button">
          View Cart
        </button>
      </Link>
    </div>
  );
}

export default Home;