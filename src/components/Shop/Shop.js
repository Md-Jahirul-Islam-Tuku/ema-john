import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const { previousCart } = useLoaderData();
   const [products, setProducts] = useState([]);
   const [count, setCount] = useState(0);
   const [cart, setCart] = useState(previousCart);
   const [page, setPage] = useState(0);
   const [size, setSize] = useState(10);
   const pages = Math.ceil(count / size);
   useEffect(() => {
      fetch(`https://ema-john-tuku-server.vercel.app/products?page=${page}&size=${size}`)
         .then(res => res.json())
         .then(data => {
            setCount(data.count)
            setProducts(data.products)
         })
   }, [page, size])
   const deleteCart = () => {
      deleteShoppingCart();
      setCart([])
   }
   const handleAddToCart = (product) => {
      let newCart = [];
      const exists = cart.find(p => p._id === product._id);
      if (!exists) {
         product.quantity = 1;
         newCart = [...cart, product];
      }
      else {
         const rest = cart.filter(p => p._id !== product._id);
         exists.quantity += 1;
         newCart = [...rest, exists];
      }
      setCart(newCart);
      addToDb(product._id);
   }

   return (
      <div className='shop-container'>
         <div className='products-container'>
            {
               products.map(product => <Product
                  key={product._id}
                  product={product}
                  handleAddToCart={handleAddToCart}
               ></Product>)
            }
         </div>
         <div className='cart-container'>
            <Cart
               deleteCart={deleteCart}
               cart={cart}
            ></Cart>
         </div>
         <div className='pagination'>
            {
               [...Array(pages).keys()].map(number => <button
                  key={number}
                  className={page === number && 'selected'}
                  onClick={() => setPage(number)}
               >
                  {number}
               </button>)
            }
            <select onChange={e => setSize(e.target.value)} className='select' name="" id="">
               <option value="5">5</option>
               <option value="10" selected>10</option>
               <option value="15">15</option>
               <option value="20">20</option>
            </select>
         </div>
      </div>
   );
};

export default Shop;