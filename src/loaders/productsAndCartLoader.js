import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
   const productsData = await fetch('https://ema-john-tuku-server.vercel.app/products');
   const { products, count } = await productsData.json();
   const savedCart = getStoredCart();
   const previousCart = [];
   for (const id in savedCart) {
      const addedProduct = products.find(product => product._id === id)
      if (addedProduct) {
         const quantity = savedCart[id];
         addedProduct.quantity = quantity;
         previousCart.push(addedProduct);
      }
   }
   return { products, previousCart, count };
}