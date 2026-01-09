import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export  const ProductData = createContext()
const PostContext = (props) => {
    const [storeData, setstoreData] = useState([])
     const datafetch =  async ()=>{
           const response  = await  axios('https://fakestoreapi.com/products')
         
           setstoreData(response.data)
             
        }
         console.log(storeData);
        useEffect(()=>{
            datafetch()
        },[])
   
  return (
   <ProductData.Provider value={{storeData, setstoreData}} >
         {props.children}
   </ProductData.Provider>
  )
}

export default PostContext