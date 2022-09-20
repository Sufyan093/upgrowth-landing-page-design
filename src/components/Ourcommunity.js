import React from 'react'
import cardlogo from '../images/cardlogo.png'
function Ourcommunity() {
    return (
        <>
            <div className="coummunity_bg">
                <div className="">
                    <div className="grid-cols-10 mx-auto">
                        <div className="row-span-full">
                            <div className="grid lg:grid-cols-4 place-items-center gap-10 community_grid_sec">
                                <div className="col-span-2">
                                    <div className='community_section'>
                                        <h1 className='text-5xl	text-third-section font-bold'>Our community <br></br>says it best</h1>
                                        <p className='mt-10 text-xl font-semibold text-third-section'><strong>94% of UpGrowth users </strong>would <br />recommend UpGrowth to a friend</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="border rounded-lg bg-white shadow w-4/5 card_custom card_margin">
                                        <div className="flex p-6 gap-4 items-center">
                                            <img src={cardlogo} className="card_img"></img>
                                            <div>
                                                <p className="text-justify text-base">“UpGrowth jumpstarted what we knew already worked best, getting our customers to sing our praises for us. It’s a no-brainer.”</p>
                                                <p className="text-justify mt-4 text-base font-semibold">Dr. Brittany Woodard-Hampton, Founder & CEO Point of Health | Wellness</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded-lg bg-white shadow w-4/5 card_custom">
                                        <div className="flex p-6 gap-4 items-center">
                                            <img src={cardlogo} className="card_img"></img>
                                            <div>
                                                <p className="text-justify text-base">“UpGrowth jumpstarted what we knew already worked best, getting our customers to sing our praises for us. It’s a no-brainer.”</p>
                                                <p className="text-justify mt-4 text-base font-semibold">Dr. Brittany Woodard-Hampton, Founder & CEO Point of Health | Wellness</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded-lg bg-white shadow w-4/5 card_custom">
                                        <div className="flex p-6 gap-4 items-center">
                                            <img src={cardlogo} className="card_img"></img>
                                            <div>
                                                <p className="text-justify text-base">“UpGrowth jumpstarted what we knew already worked best, getting our customers to sing our praises for us. It’s a no-brainer.”</p>
                                                <p className="text-justify mt-4 text-base font-semibold">Dr. Brittany Woodard-Hampton, Founder & CEO Point of Health | Wellness</p>
                                            </div>
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

export default Ourcommunity