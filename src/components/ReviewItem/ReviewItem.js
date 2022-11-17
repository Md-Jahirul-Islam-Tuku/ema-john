import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, deleteItem }) => {
   const { _id, img, name, price, shipping, quantity } = product;
   console.log(_id);
   return (
      <div className='reviewItem'>
         <div>
            <img src={img} alt="" />
         </div>
         <div className='reviewItemInfo'>
            <div>
               <h4>{name}</h4>
               <h5>Price: <span>{price}</span>, Shipping Charge: <span>{shipping}</span></h5>
               <h5>Quantity: <span>{quantity}</span></h5>
            </div>
            <div>
               <button onClick={() => deleteItem(_id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
         </div>
      </div>
   );
};

export default ReviewItem;