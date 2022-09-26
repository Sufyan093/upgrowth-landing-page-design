import React from 'react'
import person from '../images/personone.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'
import person5 from '../images/person5.png'
import person6 from '../images/person6.png'




function GridSection() {
    return (
        <>
            <div className="GridSection_bg xl:-mt-48 lg:-mt-48 md:-mt-60 sm:-mt-72 xs:-mt-72 xxs:-mt-72">
                <div className="pt-52">
                    <div className="grid-cols-10 mx-auto">
                        <div className="row-span-full">
                            <div className="grid lg:grid-cols-4 place-items-center gap-10">
                                <div className="col-span-2">
                                    <div className="transform_custom xl:translate-x-[100px] xl:translate-y-[0px] lg:translate-x-[100px] lg:translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] sm:translate-x-[13px] sm:translate-y-[0px] xs:translate-x-[13px] xs:translate-y-[0px] xxs:translate-x-[13px] xxs:translate-y-[0px]">
                                        <div className="flex xl:ml-8 lg:ml-4 sm:ml-0">
                                            <span className="gridsec_point bg-white py-4 px-4 text-third-section text-xl font-bold">+ $150</span>
                                        </div>
                                        <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:col-span-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 mt-6 person_window_parent xl:gap-0 lg:gap-0 md:gap-0 sm:gap-4 xs:gap-4 xxs:gap-4">
                                            <div className="person_window">
                                                <img src={person} className="w-full"></img>
                                            </div>
                                            <div className="person_window">
                                                <img src={person2} className="w-full"></img>
                                            </div>
                                            <div className="person_window">
                                                <img src={person3} className="w-full"></img>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3  md:col-span-2 mt-6 person_window_parent sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-4 xs:gap-4 xxs:gap-4">
                                            <div className="person_window">
                                                <img src={person4} className="w-full"></img>
                                            </div>
                                            <div className="person_window">
                                                <img src={person5} className="w-full"></img>
                                            </div>
                                            <div className="person_window">
                                                <img src={person6} className="w-full" ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="grid place-items-center">
                                        <h1 className='xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[48px] xs:text-[36px] xxs:text-[34px]     font-bold text-[#1C3C79]'>Word spreads fast</h1>
                                        <div className="w-[70%] mt-8">
                                            <p className='break-all text-justify text-[21px] text-[#1C3C79]'>Your customers are your <strong>biggest advocates.</strong>Put their enthusiasm, positive reviews, and social media followings to work. You've done the hard work of gaining loyal customers,<strong>let UpGrowth take it from here.</strong></p>
                                        </div>
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
export default GridSection