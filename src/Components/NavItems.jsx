import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [SocialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.screenY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false)
        }
    })

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top d-md-none ${SocialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3'><span>Creat Account</span></Link>
                        <Link to="/login" className=''>Login</Link>
                    </div>
                </div>
            </div>

            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} alt="" srcset="" />
                                </Link>
                            </div>

                        </div>
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`} >
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/Blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account </Link>
                            <Link to="/login" className='d-none d-md-block' >log in </Link>
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!SocialToggle)}>
                                <i className='icofont-info-square'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default NavItems
