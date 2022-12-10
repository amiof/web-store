import React,{useContext} from 'react';
import shop from "../asset/icon/shop.svg"
import styles from "../css/navbar.module.css"
import { CardcontextP } from '../context/Cartcontext.js';
import {Link} from  "react-router-dom";

const Navbar = () => {
    const {state}=useContext(CardcontextP)
    return (
        <div className={styles.container}>
            <div><h2><Link to="/products">products</Link></h2></div>
            
            <div className={styles.shopdiv}>
                
                <Link to="/Cart"><img src={shop} alt="shot icon"></img></Link>
                <span><p>{state.itemsCounter}</p></span>
            </div>
        </div>
    );
};

export default Navbar;