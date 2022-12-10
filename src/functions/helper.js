
const shortTitle = (data) => {
    const splitTitle=data.split(" ")
    return `${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]}`

};
const inCard =(Cardstate, id)=>{
    const result=!!Cardstate.selectedItems.find(item=>item.id===id.id)
    return result

}

const quantityCount =(state,id)=>{
     const index= state.selectedItems.findIndex(item=>item.id===id)
     if(index===-1){
        return false
      }else{
        return state.selectedItems[index].quantity

       
     }
}
export {shortTitle, inCard,quantityCount}

