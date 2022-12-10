import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import React  from "react";

export const ContextData =createContext()
const DataContext = (props) => {
     const [data, setData]= useState([])

    useEffect(()=>{
        const fetchApi=async ()=>{
           setData(await api())
        }
        fetchApi()
        
    },[])
    // console.log (data)

    return (
        <div>
            <ContextData.Provider value={data}>
                {props.children}


            </ContextData.Provider>
        </div>
    );
};

export default DataContext;