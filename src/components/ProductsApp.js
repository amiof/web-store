import React,{useContext} from 'react';
import { ContextData } from '../context/DataContext.js';
import Card from './Card.js';
import styles from "../css/products.module.css"


const ProductsApp = () => {
    const product = useContext(ContextData)
    return (
        <div className={styles.container} >
           {product.map(item=><Card key={item.id} title={item.title} img={item.image} price={item.price} id={item.id}/>)}
        </div>
    );
};

export default ProductsApp;