import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { ProductData } from '../context/PostContext'
import { Link } from 'react-router-dom'

 

const Products = () => {
    const {storeData} = useContext(ProductData)
 console.log(storeData);
  return (
    <div className='allProduct'>
        {
            storeData.map((ele, idx)=>{
        return <Link to={`/ProductsDetails/${ele.id}`} className='products' key={idx}>
            <div className='singleProduct'>
                <img src={ele.image} alt="" />
                    <h1>{ele.title}</h1>
                    
            </div>
        
        </Link>
            })
        }
    </div>
  )
}

export default Products