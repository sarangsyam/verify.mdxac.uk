import React from 'react';
import './PaymentNotice.css';

const PaymentNotice = () => {
  return (
    <div className="payment-container">
      <div className="payment-box">
        <h1 className="payment-title">Urgent: Server Due Notice (Namecheap)</h1>
        <p>Your server payment of 38.64 USD is due. Please be advised that if the payment is not completed by July 10, the server files will be permanently deleted and cannot be recovered.</p>
        <div className="button-group">
          <button className="payment-button">
            <a href="https://www.namecheap.com/hosting/vps/" target="_blank" rel="noopener noreferrer">View Plans</a>
          </button>
          <button className="payment-button">
            <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotice;
