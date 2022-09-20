import React from 'react'
import Graph from '../images/graph.png'
import girl from '../images/girl.png'

import './header.css'
function Header() {
    return (
        <>
            <div className="flex justify-center mt-28 pb-24">
                <div className="">
                    <div className="grid-cols-10 mx-auto">
                        <div className="row-span-full">
                            <div className="grid lg:grid-cols-4 place-items-center gap-10 ">
                                <div className="col-span-2 ml-36 mt-10">
                                    <div className="header_title">
                                        <span className="text-white one_line">
                                            Let us build your referral program,
                                        </span>
                                        <br></br>
                                        <i className="I_color">So you can keep building your business.</i>
                                    </div>
                                    <p className="mt-10 text-2xl font-normal text-white">
                                        Build a referral program in under five minutes.
                                        Strategically grow your business.<br></br>
                                        Build your brand with word-of-mouth marketing
                                    </p>
                                    <div className="mt-16">
                                        <button class="bg-white hover:bg-gray-100 text-gray-800 py-3 px-14 rounded-full shadow text-xl font-semibold text-brand-color">
                                            Start for free
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-2 overflow-x-hidden -mt-32">
                                    <img src={Graph} className="w-full ml-20"></img>
                                    <div>
                                        <img src={girl} className="w-auto absolute cartoon_img"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header