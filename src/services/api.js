
import axios from "axios"

const api =async () => {
    const getData=await axios.get("products")
    
   return getData.data
    

};

export default api;