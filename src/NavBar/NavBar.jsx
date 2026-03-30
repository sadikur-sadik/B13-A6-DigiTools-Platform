import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const NavBar = ({cart}) => {
    return (
        <div className='lg:max-w-300 max-w-180 w-full mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content font-medium  z-1 mt-3 w-52 p-2">
                            <li><a>Products</a></li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li><a >Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                    <a className="font-bold md:py-3 py-0 md:text-2xl lg:text-4xl text-xl from-0% to-100% bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center  hidden lg:flex font-medium">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li><a >Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                        
                    </ul>
                </div>
                <div className="navbar-end flex md:gap-2 gap-1 items-center ">
                    <div className='relative'>
                        <span><CiShoppingCart className="w-8 h-8 animate-pulse" />
                        <div className="badge animate-bounce  bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white text-bold h-5 w-5  p-0.5 rounded-full absolute -top-2.5 left-2 ">{cart.length}</div>
                    </span>
                    </div>
                    <p className='md:text-xl text-sm font-medium hidden sm:inline-block'>Login</p>
                    <a className="btn font-medium md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white ">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;