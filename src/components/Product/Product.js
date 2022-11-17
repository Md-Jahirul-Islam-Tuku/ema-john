import {
  faShoppingCart, faStar, faLayerGroup, faBagShopping
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({ handleAddToCart, product }) => {
  const { name, img, seller, ratings, price, stock, ratingsCount } = product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h3 className='product-name'>{name}</h3>
        <h4 className='product-name'>Price: <small className='price'>${price}</small></h4>
        <p className='product-name'><strong>Manufacturer:</strong> {seller}</p>
        <p className='product-name'><strong><FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon></strong> {stock}pcs <span><strong><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></strong> {ratings}</span> <span><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon> {ratingsCount}</span></p>
      </div>
      <button onClick={() => handleAddToCart(product)} className='product-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;