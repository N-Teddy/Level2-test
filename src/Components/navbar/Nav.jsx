import React from 'react'
import './nav.css'
import logo from './logo.svg';
import { Link } from 'react-router-dom'

export default function Nav() {
     return (
          <div className='nav_container'>
               <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
               </div>
               <ul className="frist_ul ul">
                    <li>
                         <Link to='/'>Home</Link>
                    </li>
                    <li>
                         <Link to='/'>About Us</Link>
                    </li>
                    <li>
                         <Link to='/'>Blog</Link>
                    </li>
               </ul>
               <ul className="second_ul ul">
                    <li>
                         <Link to='/login'>Log in</Link>
                    </li>
                    <li>
                         <Link to='/login'>Sign up</Link>
                    </li>
               </ul>
          </div>
     )
}
