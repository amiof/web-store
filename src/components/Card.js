import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import styles from "../css/card.module.css"
import { shortTitle , inCard, quantityCount } from '../functions/helper.js';
import { CardcontextP } from '../context/Cartcontext';

const Card = (props) => {
    const {state, dispatch}= useContext(CardcontextP)
    
    

    return (
        <div className={quantityCount(state,props.id)>=1?styles.CardcontainerSelected :styles.Cardcontainer}>
            <div >
                <img className={styles.image}src={props.img} alt="pic"></img>
                <p>{shortTitle(props.title)}</p>
            
                <Link className={styles.Ditail} to={`/products/${props.id}`}>Ditails</Link>
                <div>    
                { inCard(state,props)?
                <button  className={styles.add2} onClick={()=>dispatch({type:"INCREASE",payload:props})} >+</button>:
                <button className={styles.add} onClick={()=>dispatch({type:"ADD_ITEM",payload:props})}>add to card</button>
                
        }
                
                {quantityCount(state,props.id)===1 &&
                    <button className={styles.add} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props})}>remove</button>}
                {quantityCount(state,props.id) >1 &&
                <button className={styles.add} onClick={()=>dispatch({type:"DECRIES",payload:props})}>-</button>}
            {quantityCount(state,props.id) >=1 && <p className={styles.counter}> {quantityCount(state,props.id)} </p>}
                </div>
            </div>
             

            
             

            
        </div>
    );
};

export default Card;