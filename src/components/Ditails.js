import React, {useContext} from 'react';
import { ContextData } from '../context/DataContext';
import styles from "../css/Details.module.css"
const Ditails = (props) => {
   const dataProduct = useContext(ContextData)
  const filterProduct= dataProduct.filter(item=>{return item.id===Number(props.match.params.id) })
  const filteredProduct= filterProduct[0]
//    console.log("filter",filteredProduct)
    return (
        <><div className={styles.first}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={filteredProduct.image} alt="product pic"></img>
                </div>
                <div className={styles.desc}>
                    <h1> Ditails of {filteredProduct.title}</h1>
                    <p>Category:  {filteredProduct.category} </p>   
                    <p>price :{filteredProduct.price} $</p>
                    <p>{filteredProduct.description} </p>
                </div>
                <div className={styles.rate}>
                        <p>rating: {filteredProduct.rating.rate}</p>
                        <p>number of rating :{filteredProduct.rating.count}</p>
                </div>
            </div>
        </div>
         </>

            
            
        
    );
};

export default Ditails;