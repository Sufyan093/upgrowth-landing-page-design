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
            <div className="GridSection_bg">
                <div className="pt-44">
                    <div className="grid-cols-10 mx-auto">
                        <div className="row-span-full">
                            <div className="grid lg:grid-cols-4 place-items-center gap-10">
                                <div className="col-span-2">
                                    <div className="transform_custom">
                                        <div className="flex  ml-8">
                                            <span className="gridsec_point bg-white py-4 px-4 text-third-section text-xl font-bold">+ $150</span>
                                        </div>
                                        <div className="grid grid-cols-3 md:col-span-2 mt-6 person_window_parent">
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
                                        <div className="grid grid-cols-3 mt-6 person_window_parent">
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
                                    <div className="grid place-items-center c">
                                        <h1 className='text-[48px] font-bold text-[#1C3C79]'>Word spreads fast</h1>
                                        <div className="w-[70%]">
                                            <p className='text-justify text-[21px]'>Your customers are your <strong>biggest advocates.</strong>Put their enthusiasm, positive reviews, and social media followings to work. You've done the hard work of gaining loyal customers, let UpGrowth take it from here.</p>
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