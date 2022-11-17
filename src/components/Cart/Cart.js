import React from 'react';
import './Cart.css';
import border from '../../images/divider.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, deleteCart }) => {
   const cartLength = cart.reduce((sum, p) => sum + p.quantity, 0);
   const TotalPrice = cart.reduce((sum, p) => sum + (p.price * p.quantity), 0);
   const Tax = +((TotalPrice * 0.02).toFixed(2));
   const TotalShippingCharge = cart.reduce((sum, p) => sum + (p.shipping * p.quantity), 0)
   const grandTotal = +((TotalPrice + Tax + TotalShippingCharge).toFixed(2));
   const navigate = useNavigate();
   const navigateToOrders = () => {
      navigate('/orders');
   }
   return (
      <div className='cartBorder'>
         <div className='cart-header'>
            <h1>Cart Summary</h1>
         </div>
         <img src={border} alt='' />
         <div className='cart'>
            <h3>Selected Items: {cartLength}</h3>
            <p><strong>Total Price:</strong> ${TotalPrice}</p>
            <p><strong>Total Shipping Charge:</strong> ${TotalShippingCharge}</p>
            <p><strong>Tax(2%): </strong>${Tax}</p>
            <h3>Grand Total: <span>${grandTotal}</span></h3>
            <button onClick={deleteCart} className='btnClearCart'>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            <button onClick={navigateToOrders} className='btnReviewOrders'>Review Orders <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
         </div>
      </div>
   );
};

export default Cart;