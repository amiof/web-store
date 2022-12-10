import React from 'react';
import styles from "../css/cart.module.css"
import { shortTitle } from '../functions/helper';

const Cart = (props) => {
    const {image, price, header, quantity}=props
    
    return (
        <div className={styles.container}>
            <img src={image} alt='pic product'></img>
            <div className={styles.headerPrice}>
                <span>{shortTitle(header)}</span>
                <span>{price} $
                </span>

            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div>
                <button>remove</button>
                <button>+</button>
            </div>
       
            
        </div>
    );
};

export default Cart;