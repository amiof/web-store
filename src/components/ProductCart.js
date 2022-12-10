import React, { useContext } from "react";
import Cart from "./Cart";
import { CardcontextP } from "../context/Cartcontext.js";
import styles from "../css/cartporduct.module.css";
import { Link } from "react-router-dom";
const ProductCart = () => {
  const { state, dispatch } = useContext(CardcontextP);
  const checkout= ()=>{
    dispatch ({type:"CHECKOUT"})

  }

  return (
    <>
      <div className={styles.container}>
        <div>
          {state.selectedItems.map((item) => (
            <Cart
              key={item.id}
              image={item.img}
              price={item.price}
              header={item.title}
              quantity={item.quantity}
            />
          ))}
        </div>
        
        <div id={styles.total}>
          {!state.checkout && state.itemsCounter>0 ?<> <span>
            <p>total price : {state.total.toFixed(2)} $</p>
          </span>
          <span className={styles.button}>
            <button>
              <Link to="/products">back to products</Link>
            </button>
            <button onClick={checkout} >check out</button>
            <button onClick={()=>{dispatch({type:"CLEAR"})}} >CLEAR</button>
          </span></>:
          !state.checkout &&state.itemsCounter===0 ?<div><p>you want buy </p>
       
        <Link to="/products">back to shop </Link></div>:<p>checkout is successes</p> }
        </div>
        
      </div>
    </>
  );
};

export default ProductCart;
