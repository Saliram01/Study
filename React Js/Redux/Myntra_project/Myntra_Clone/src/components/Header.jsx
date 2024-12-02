import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="logo_container">
            <Link to="/">
                <img className="myntra_home" src="/images/myntra_logo.webp" alt="Myntra Home"/>
            </Link>
        </div>
        <nav className="nav_bar">
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/living">Home & Living</Link>
            <Link to="/beauty">Beauty</Link>
            <Link to="studio">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <IoPersonSharp />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <FaHeartPulse />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
                <IoBagHandle />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">0</span>
            </Link>
        </div>
    </header>
  )
}

export default Header