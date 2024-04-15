import React from 'react'
import './footer.css'

export default function Footer() {

     let date = new Date().getFullYear();
     let time = new Date().toDateString();

  return (
    <div className='footer_container'>
            <p>Built and maintained by @Teddy</p>
            <p>copywright {date}</p>
            <p>last update {time}</p>
    </div>
  )
}
