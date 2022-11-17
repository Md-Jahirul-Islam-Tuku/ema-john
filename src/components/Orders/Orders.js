import React from 'react';
import './Orders.css';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import OrdersCart from '../OrdersCart/OrdersCart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
   const { previousCart } = useLoaderData();
   const [cart, setCart] = useState(previousCart);

   const deleteCart = () => {
      deleteShoppingCart();
      setCart([]);
   }
   const deleteItem = id => {
      removeFromDb(id);
      const remaining = cart.filter(p => p._id !== id)
      setCart(remaining);
   }
   return (
      <div className='reviewItemsContainer'>
         <div className='reviewItems'>
            {
               cart.map(product => <ReviewItem
               key={product._id}
               product={product}
               deleteItem={deleteItem}
               ></ReviewItem>)
            }
         </div>
         <div className='reviewCartContainer'>
            <OrdersCart 
            cart={cart}
            deleteCart={deleteCart}
            ></OrdersCart>
         </div>
      </div>
   );
};

export default Orders;