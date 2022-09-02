import React, { useState } from "react";
import CartItem from "../../Components/CartItem";
import { useCart } from "../../Context/CartContext";
import styles from "./styles.module.css";

const Cart = () => {
  // const cart = JSON.parse(localStorage.getItem('cart'));


  const { cartProducts, waiting, setWaiting ,totalPrice,setTotalPrice} = useCart();
  
  return (
    <div className={styles.cardGroup}>
      <div>
      {
        waiting ? (<h1>loading...</h1>):
        cartProducts.map((item)=>{
                return (
                    <CartItem item={item} key={item.id}/>
                )
            })
      }
      </div>
      <div className="mx-auto w-80 h-40 text-center justify-center">
        <div className={styles.summary}>
         <h1>Order Summary</h1>
         <div className="flex mt-2">
          <h4 className="mx-auto">SubTotal</h4>
          <h1 className="mx-auto pl-1">$ {totalPrice}</h1>
         </div>
         <div className="flex">
          <h4 className="mx-auto">Shiping Estimate</h4>
          <h1 className="mx-auto pl-1">$ 5</h1>
         </div>
         <div className="flex">
          <h4 className="mx-auto pr-1">Tax Estimate</h4>
          <h1 className="mx-auto pl-1">$ 5</h1>
         </div>
         <div className="flex mt-4">
          <h4 className="mx-auto pl-4">Order Total</h4>
          <h1 className="mx-auto pr-4">$ {totalPrice+10}</h1>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
