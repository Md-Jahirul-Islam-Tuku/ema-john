import React from 'react';
import './OrdersCart.css';
import border from '../../images/divider.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OrdersCart = ({ cart, deleteCart }) => {
   const cartLength = cart.reduce((sum, p) => sum + p.quantity, 0);
   const TotalPrice = cart.reduce((sum, p) => sum + (p.price * p.quantity), 0);
   const Tax = +((TotalPrice * 0.02).toFixed(2));
   const TotalShippingCharge = cart.reduce((sum, p) => sum + (p.shipping * p.quantity), 0)
   const grandTotal = +((TotalPrice + Tax + TotalShippingCharge).toFixed(2));

   return (
      <div className='reviewBorder'>
         <div className='reviewCart-header'>
            <h1>Cart Summary</h1>
         </div>
         <img src={border} alt='' />
         <div className='reviewCart'>
            <h3>Selected Items: {cartLength}</h3>
            <p><strong>Total Price:</strong> ${TotalPrice}</p>
            <p><strong>Total Shipping Charge:</strong> ${TotalShippingCharge}</p>
            <p><strong>Tax(2%): </strong>${Tax}</p>
            <h3>Grand Total: <span>${grandTotal}</span></h3>
            <button onClick={deleteCart} className='reviewBtnClearCart'>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            <Link to='/shipping'><button className='btnReviewOrders'>Proceed Checkout <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
         </div>
      </div>
   );
};

export default OrdersCart;