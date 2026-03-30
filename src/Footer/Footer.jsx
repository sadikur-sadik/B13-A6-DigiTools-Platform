import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full bg-[#101727FF] md:py-30 pt-20'>
            <div className='lg:max-w-300 max-w-180 w-full mx-auto  space-y-20'>
                <div className='grid grid-cols-2 md:grid-rows-1 grid-rows-3 md:grid-cols-5 text-center gap-15 md:gap-0  justify-between'>
                    <div className='space-y-4 text-white col-span-2 md:col-span-1'>
                        <h1 className='text-4xl font-bold'>DigiTool</h1>
                        <p className=' text-[#fafafaFF]/60'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter<br /> with our suite of powerful tools.</p>
                    </div>
                    <ul className='space-y-4  text-white'>
                        <li className='font-medium text-xl'>Product</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                    <ul className='space-y-4  text-white'>
                        <li className='font-medium text-xl'>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                    <ul className='space-y-4  text-white'>
                        <li className='font-medium text-xl'>Resources</li>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='space-y-4'>
                        <li className='font-medium text-xl text-white'>Resources</li>
                        <li className='flex gap-2 items-center justify-center'>
                            <p className='h-10 w-10 rounded-full py-2.5 px-2.5 bg-white'><AiFillInstagram className='h-5 w-5' /></p>
                            <p className='h-10 w-10 rounded-full py-2.5 px-2.5 bg-white'><FaFacebookSquare className='h-5 w-5' /></p>
                            <p className='h-10 w-10 rounded-full py-2.5 px-2.5 bg-white'><FaXTwitter className='h-5 w-5' /></p>
                        </li>
                    </ul>
                </div>
                
                <div className='border-t border-white flex justify-between pt-4 text-[#fafafaFF]/60 text-xs flex-col text-center gap-5 md:gap-0 md:flex-row'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <ul className='flex justify-between  gap-4'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;