import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {

     const { id } = useParams();
     const [products, setProducts] = useState({})
     // movies api function

     const getProduct = async () => {
          await axios.get(`https://fakestoreapi.com/products/${id}`).then(result => {
               setProducts(result.data)
          }).catch(error => console.log(error));

     }

     // calling our function
     useEffect(() => {
          getProduct();
     }, [])

  return (
       <section className="cat">
            <div className="cat_img">
                 <img src={products.image} height="100%" width="100%" alt="" />
            </div>
            <p className="three">{products.title}</p>
            <p className="five">${products.price}</p>
       </section>
  )
}
