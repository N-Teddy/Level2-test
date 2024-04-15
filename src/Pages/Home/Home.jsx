import React from 'react'
import Nav from '../../Components/navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import './home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Home() {

  const [products, setProducts] = useState([])

  const getProduct = async () => {
    await axios.get('https://fakestoreapi.com/products').then(result => {
      // console.log(result.data);
      setProducts(result.data)
      // console.log(products)
    }).catch(error => console.log(error));

  }
  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div>
      <Nav />
      <div className="product_container">
        {products.map(product => (
          <div className='card_container'>
            <div className="img">
              <img src={product.image} alt="" />
            </div>
            <div className='blur'>
              <button className='detail_button'>
                <Link to={`/products/${product.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
