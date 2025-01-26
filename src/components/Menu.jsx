import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="block1">
        
          <h1>Food Delivery</h1>
          <p>
            Order food from your favorite restaurants and have it delivered to
            your doorstep.
          </p>
          <button>Order Now</button>
        
      </div>
      <div className="block2">
        <p>Coming Soon ......</p>
      </div>
      <div className="block3">
        <h2>Be a partner with us </h2>
        <p>
          Partner with us and earn money by delivering food to the customers.
          </p>
          <button className="join">
            Join Now
          </button>
      </div>
    </div>
  );
};

export default Menu;