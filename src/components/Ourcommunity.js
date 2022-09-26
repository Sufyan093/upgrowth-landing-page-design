import React from 'react'
import cardlogo from '../images/cardlogo.png'
import triangle from '../images/triangle.png'
import ThatBar from '../images/thatbar.png'



function Ourcommunity() {
    return (
        <>
            <div className="coummunity_bg">
                <div className="">
                    <div className="grid-cols-10 mx-auto">
                        <div className="row-span-full">
                            <div className="grid lg:grid-cols-4 place-items-center gap-10 xl:pb-[170px] lg:pb-[120px] md:pb-[280px] sm:pb-[300px] xs:pb-[320px] xxs:pb-[320px]">
                                <div className="col-span-2">
                                    <div className='community_section xl:pt-0 lg:pt-0 md:pt-16 sm:pt-24 xs:pt-32 xxs:pt-32'>
                                        <h1 className='xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-2xl xxs:text-lg text-third-section font-bold xl:text-unset lg:text-unset md:text-unset sm:text-unset xs:text-unset xxs:text-center'>Our community <br /> says it best</h1>
                                        <p className='xl:mt-10 lg:mt-10 md:mt-10 sm:mt-6 xs:mt-6 xxs:mt-6 xl:text-xl lg:text-xl md:text-xl sm:text-lg xs:text-base xxs:text-sm font-semibold text-third-section xl:text-unset lg:text-unset md:text-center sm:text-center xs:text-center xxs:text-center'><strong>94% of UpGrowth users </strong>would <br />recommend UpGrowth to a friend</p>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:mb-0 lg:mb-12 grid xl:place-items-unset lg:place-items-unset md:place-items-unset sm:place-items-center xs:place-items-center xxs:place-items-center">
                                    <div className="border rounded-lg bg-white shadow w-4/5 card_custom xl:mt-[15%] lg:mt-[1%] xl:ml-0 lg:ml-0 md:ml-4">
                                        <div className="flex p-6 gap-4 items-center">
                                            <img src={cardlogo} className="card_img"></img>
                                            <div>
                                                <p className="text-left xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs xxs:text-xs  text-[#4F4F4F]">“UpGrowth jumpstarted what we knew already worked best, getting our customers to sing our praises for us. It’s a no-brainer.”</p>
                                                <p className="break-all	text-justify mt-4 xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs xxs:text-xs font-semibold text-[#4F4F4F]">Dr. Brittany Woodard-Hampton, Founder & CEO Point of Health | Wellness</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg bg-white shadow w-4/5 card_custom xl:ml-[72px] lg:ml-[72px] md:ml-[72px] sm:ml-[0px] xs:ml-[0px] xxs:ml-[0px]">
                                        <div className="flex p-6 gap-4 items-center">
                                            <img src={triangle} className="card_img"></img>
                                            <div>
                                                <p className="text-left xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs xxs:text-xs text-[#4F4F4F]">“It’s been so great to have UpGrowth as one of the primary tools in our toolbox to expedite growth. The referral program is custom to our product, and we love being able to keep track of our digital and IRL footprint.”</p>
                                                <p className=" break-all text-justify mt-4 xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs xxs:text-xs font-semibold text-[#4F4F4F]">Khufu Reign, Founder & CEO <br></br> Reignwater | Web3</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg bg-white shadow w-4/5 card_custom xl:ml-0 lg:ml-0 md:ml-4">
                                        <div className="flex p-6 gap-4 items-center">
                                            <img src={ThatBar} className="card_img"></img>
                                            <div>
                                                <p className="text-left xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs xxs:text-xs text-[#4F4F4F]">“I wanted regulars, and UpGrowth made that happen for me.”</p>
                                                <p className="break-all	text-justify mt-4 xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xs xxs:text-xs font-semibold text-[#4F4F4F]">Perry, General Manager<br></br> That Bar | Hospitality </p>
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