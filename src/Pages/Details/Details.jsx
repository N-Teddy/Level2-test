import React from 'react'
import Nav from '../../Components/navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import './details.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
    <div>
      <Nav />
      <div className="detail_container">
        <div className="product_image">
          <img src={products.image} alt="" />
        </div>
        <div className="desc">
          <p className="entry">
            <p className="key">Name :</p>
            <p className="value">{products.title}</p>
          </p>
          <p className="entry">
            <p className="key">Price :</p>
            <p className="value">${products.price}</p>
          </p>
          <p className="entry">
            <p className="key">Description :</p>
            <p className="value">{products.description}</p>
          </p>
          <p className="entry">
            <p className="key">Category :</p>
            <p className="value">{products.category}</p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
