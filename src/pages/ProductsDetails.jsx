import React, { useContext } from 'react'
import { ProductData } from '../context/PostContext'
import { useNavigate, useParams } from 'react-router-dom'

const ProductsDetails = () => {
 const navigate  =  useNavigate()
const {storeData}   = useContext(ProductData)
 const {id}  = useParams()
 console.log(id);
 
 const data = storeData.find((ele)=> id == ele.id)
    if (!data) return <h2>Loading...</h2>
console.log(data);

  return (
    <div className='Product-Detail'>
      <div className="right">
        <img src={data.image} alt="" />
                    
      </div>
      <div className="left">
        <button onClick={()=>{
            navigate('/')
        }}>back</button>
          <h1>{data.title}</h1>
           
    <p className='category'><strong>Category:</strong> {data.category}</p>
    <p className='desc'>{data.description}</p>
    <h3 className='price'>₹ {data.price}</h3>
    <p className='retting'>⭐ {data.rating.rate} ({data.rating.count} reviews)</p>

      </div>
    </div>
  )
}

export default ProductsDetails