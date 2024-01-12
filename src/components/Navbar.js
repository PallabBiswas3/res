import React from 'react';
import Logo from "../assests/images/logo.png";
const Navbar = () => {
    const searchHandler =() => {
        console.log("abcd");
    }
    return (
        <>
        <header className="header">
            <a href ="#" classname ="logo">
                <img src = {Logo} alt="image"/>
            </a>
            <nav classname="navbar">
                <a href="#home">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#menu">Menu</a>
                <a href="#review">Review</a>
                <a href="#footer">Footer</a>
            </nav>
            
                <div className="icons">
                <div className="fas fa-search" onClick={searchHandler}></div>
                <div className="fas fa-shopping-cart"></div>
                <div className="fas ba-bars" id="menu-btn"></div>
                </div>
                <div className="search-form active">
                    <input type ="search" placeholder="search here.." id="search-box"/>
                    <label htmlFor="search-box"className='fas fa-search'></label>
                </div>

           
        </header>
        </>
      );
}
 
export default Navbar;