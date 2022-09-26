import React from 'react'
import Graph from '../images/graph.png'
import girl from '../images/girl.png'

import './header.css'
function Header() {
    return (
        <>
            <div className="flex justify-center xl:mt-28 lg:mt-28 md:mt-28 sm:mt-6 xs:mt-6 xxs:mt-6 xl:pb-24 lg:pb-36 md:pb-32 sm:pb-[17rem] xs:pb-[15rem] xxs:pb-[13rem]">
                <div className="mx-auto">
                    <div className="row-span-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                            <div className="lg:ml-36 md:ml-20">
                                <div className="xl:text-[66px] xl:leading-[80px] lg:text-4xl md:text-4xl sm:text-5xl xs:text-4xl xxs:text-2xl font-extrabold xl:px-0 lg:px-0 md:px-0 sm:px-6 xs:px-12 xxs:px-16">
                                    <span className="text-white">
                                        Let us build your referral program,
                                    </span>
                                    <br />
                                    <i className="I_color">So you can keep building your business.</i>
                                </div>
                                <p className="xl:mt-10 lg:mt-10 md:mt-10 sm:mt-6 xs:mt-6 xxs:mt-6 xl:text-2xl lg:text-xl md:text-base sm:text-base xs:text-[12px] xxs:text-[11px] font-normal text-white xl:px-0 lg:px-0 md:px-0 sm:px-6 xs:px-12 xxs:px-16">
                                    Build a referral program in under five minutes.
                                    Strategically grow your business.<br></br>
                                    Build your brand with word-of-mouth marketing
                                </p>
                                <div className="xl:mt-16 lg:mt-16 md:mt-16 sm:mt-8 xs:mt-8 xxs:mt-8 flex xl:justify-start lg:justify-start md:justify-start sm:justify-center xs:justify-center xxs:justify-center">
                                    <button class="bg-white hover:bg-gray-100 py-3 px-14 rounded-full shadow text-xl font-semibold text-brand-color">
                                        Start for free
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-hidden">
                                <img src={Graph} className="w-full xl:ml-24 lg:ml-24 md:ml-24 sm:ml-0 xs:ml-0 xxs:ml-0"></img>
                                <div>
                                    <img src={girl} className="xl:w-auto lg:w-auto md:w-auto sm:w-[50%] xs:w-[50%] xxs:w-[50%] absolute xl:translate-x-[380px]  xl:-translate-y-[180px]  lg:translate-x-[267px]  lg:-translate-y-[150px] md:translate-x-32 md:-translate-y-28  sm:translate-x-0 sm:-translate-y-28 xs:translate-x-0 xs:-translate-y-24 xxs:translate-x-0 xxs:-translate-y-20"></img>
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