import React from 'react'
import './cart.css'

export default function Cart(props) {
     return (
          <div className='card_container'>
               <div className="img">
                    <img src={props} alt="" />
               </div>
               <div className='blur'>
                    <button className='detail_button'>View Details</button>
               </div>
          </div>
     )
}
