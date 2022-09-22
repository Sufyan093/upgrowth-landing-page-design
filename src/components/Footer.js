import React from 'react'
import { IoMdMail, } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="footer relative z-[1] -mt-52">
                <div className="bg-[#161B49] pb-28">
                    <div className="grid">
                        <div className="flex sm:flex-wrap mt-28 justify-around">
                            <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 xl:gap-24 lg:gap-16 md:gap-8 xl:px-0 lg:px-0 md:px-4 sm:gap-6 xs:gap-6 xxs:gap-6">
                                <div className="text-white">
                                    <h2 className="text-2xl	font-bold">UpGrowth</h2>
                                    <ul className="flex gap-[.7rem] mt-4">
                                        <li>
                                            <a href="#" className="text-white">
                                                <IoMdMail className="text-2xl" />
                                            </a>
                                        </li>

                                        <li className="flex items-center">
                                            <a href="#" className="text-white">
                                                <FaLinkedin className="text-xl" />
                                            </a>
                                        </li>

                                        <li className="flex items-center">
                                            <a href="#" className="text-white">
                                                <FaInstagram className="text-xl" />
                                            </a>
                                        </li>

                                        <li className="flex items-center">
                                            <a href="#" className="text-white">
                                                <BsFacebook className="text-xl" />
                                            </a>
                                        </li>
                                    </ul>


                                </div>

                                <div className="text-white">
                                    <h2 className="font-semibold text-base">PRODUCTS</h2>
                                    <ul className="mt-4">
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Features Overview</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Campaign Creation</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Campaign Management</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Analytics</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Payouts</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Activity Feed</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Pricing</a></li>

                                    </ul>
                                </div>

                                <div className="text-white">
                                    <h2 className="font-semibold text-base" >RESOURCES</h2>
                                    <ul className="mt-4">
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Industries</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Help Center</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>FAQ</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Webinars</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Reviews </a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Blog</a></li>
                                    </ul>
                                </div>

                                <div className="text-white">
                                    <h2 className="font-semibold text-base" >CONNECT</h2>
                                    <ul className="mt-4">
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Contact Us</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Our Team</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Directory</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Live Chat</a></li>
                                        <li><a href="#" className='text-bast font-normal text-[#878FAA] hover:text-white'>Support</a></li>

                                    </ul>
                                </div>

                            </div>
                            <div className="grid grid-cols-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
