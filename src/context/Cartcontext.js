import React,{useReducer, createContext} from 'react';


const initialState= {
    selectedItems : [],
    itemsCounter : 0 ,
    total:0 ,
    checkout:false,
    

}

const sumItem=(item)=>{
    const itemsCounter=item.reduce((total, product)=>total+product.quantity,0)
    const total=item.reduce((total, product)=>total+product.price*product.quantity,0)
    return {itemsCounter, total}
}
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item=>item.id===action.payload.id)){
                
                state.selectedItems.push({...action.payload ,
                   quantity: 1
                
                }) }
            return {
                ...state,
                selectedItems:[...state.selectedItems],
                ...sumItem(state.selectedItems)
                ,checkout:false
            }
        case "REMOVE_ITEM":
            let removedItem = state.selectedItems.filter(item=>item.id !== action.payload.id)
          
        return {
            ...state,
            selectedItems:[...removedItem],
            ...sumItem(removedItem),
            checkout:false,
            
         }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item=> item.id === action.payload.id)
            state.selectedItems[indexI].quantity++
            
            return {
                ...state,
                ...sumItem(state.selectedItems),
                checkout:false
               
            }
        case "DECRIES":
            const indexII= state.selectedItems.findIndex(item=> item.id === action.payload.id)
            state.selectedItems[indexII].quantity--
            return {
                ...state,
                ...sumItem(state.selectedItems)
            }
        
        case "CHECKOUT":
            state= {
                selectedItems : [],
                itemsCounter : 0,
                total:0,
                checkout:true
            }
            return state
        case "CLEAR":
            state= {
                selectedItems : [],
                itemsCounter : 0,
                total:0,
                checkout:false

            }
            return state
        default :
         return state
        }


}
export const CardcontextP = createContext()
const Cartcontext = ({children}) => {
    
    const [state, dispatch]=useReducer(reducer, initialState)
    
    return (
        <div>
            <CardcontextP.Provider value={{state,dispatch}}>
                {children}

            </CardcontextP.Provider>
        </div>
    );
};

export default Cartcontext;