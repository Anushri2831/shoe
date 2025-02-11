import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [selectedShipping, setSelectedShipping] = useState("Fedex");

  return (
    <div className="checkout-container">
      <h1>WearUp</h1>
      <h6 className="checkout-title">Order Overview</h6>
      

      <div className="checkout-content">
        {/* Summary Order */}
        <div className="summary-order">
          <h3>Summary Order</h3>
          <p>Check your item and select your shipping for a better experience.</p>
          <div className="order-items">
            <div className="order-item">
              <img src="https://th.bing.com/th/id/OIP.IidAryC8PMSMDqFnj6dziAHaEl?w=304&h=189&c=7&r=0&o=5&pid=1.7" alt="Shoe 1" />
              <div className="item-details">
                <p>New Balance 57/40 Men's Sneakers - Mindful Grey</p>
                <p className="price">$129.00 <span className="old-price">$189.00</span></p>
              </div>
            </div>
            <div className="order-item">
              <img src="https://th.bing.com/th/id/OIP.9ZhYqmzfKDLOG_pBEcI6JAAAAA?w=323&h=185&c=7&r=0&o=5&pid=1.7" alt="Shoe 2" />
              <div className="item-details">
                <p>New Balance 997H Men's Sneakers - Grey</p>
                <p className="price">$119.00 <span className="old-price">$179.00</span></p>
              </div>
            </div>
            <div className="order-item">
              <img src="https://th.bing.com/th/id/OIP.8rFfkINNJ9v00FIX0KU1RAHaFj?w=261&h=196&c=7&r=0&o=5&pid=1.7" alt="Shoe 3" />
              <div className="item-details">
                <p>New Balance 57/40 Women's - Oyster Pink</p>
                <p className="price">$149.00</p>
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <h3>Available Shipping Method</h3>
          <div className="shipping-options">
            <label className={selectedShipping === "Fedex" ? "selected" : ""}>
              <input type="radio" name="shipping" value="Fedex" checked={selectedShipping === "Fedex"} onChange={() => setSelectedShipping("Fedex")} />
              <span className="shipping-label">
                <img src="https://th.bing.com/th?q=FedEx+Tracking+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="FedEx" /> FedEx Delivery (Free)
              </span>
            </label>
            <label className={selectedShipping === "DHL" ? "selected" : ""}>
              <input type="radio" name="shipping" value="DHL" checked={selectedShipping === "DHL"} onChange={() => setSelectedShipping("DHL")} />
              <span className="shipping-label">
                <img src="https://th.bing.com/th?q=DHL+Delivery!+Secure+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="DHL" /> DHL Delivery ($12.00)
              </span>
            </label>
          </div>
        </div>
        
        {/* Payment Details */}
        <div className="payment-details">
        <div className="checkout-steps">
        <span className="step active">✔ Information</span>
        <span className="step active">2 Payment Details</span>
        <span className="step">3 Complete Order</span>
        </div>
          <h3>Payment Details</h3>
          <label>Email Address</label>
          <input type="email" value="barlyvallendito@gmail.com" readOnly />

          <label>Card Details</label>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="MM / YY" />
          <input type="text" placeholder="CVC" />

          <label>Card Holder</label>
          <input type="text" value="Barly Vallendi" readOnly />

          <label>Billing Address</label>
          <input type="text" value="7851 Garfield Ave, Huntington Beach" readOnly />
          <input type="text" value="California (CA)" readOnly />
          <input type="text" value="92648" readOnly />

          {/* Payment Summary */}
          <div className="payment-summary">
            <p>Subtotal: <span>$397.00</span></p>
            <p>VAT (20%): <span>$2.89</span></p>
            <h3>Total: <span>$399.89</span></h3>
          </div>

          <button className="pay-button">Pay $399.89</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;