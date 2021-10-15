import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [pNumber, setNumber] = useState("");

  return (
    <>
      <div class="shop-cart">
        <div class="shop-cart-title">Tomato</div>
        <div class="shop-cart-desc">Fresh as the morning breeze!</div>
        <div class="shop-cart-slider">
          <img
            alt="tomato"
            style={{ width: "100%", borderRadius: "15px" }}
            src="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-round-desi-vegetable-seeds-16969384296588.jpg?v=1601351553"
          />
        </div>
        <div class="deets">
          <div>
            <label for="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              onChange={(val) => {
                setNumber(val);
              }}
            />
          </div>
        </div>
        <div class="shop-cart-cta">
          <div class="shop-cart-cta-price">1kg - ₹500</div>
          <button class="btn">
            Pay Via Simpl<span class="bg"></span>
          </button>
        </div>
      </div>
      <div class="bg"></div>
    </>
  );
}

export default App;
