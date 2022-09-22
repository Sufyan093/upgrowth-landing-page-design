import React from 'react'
import Peep from '../images/peep.png'
import Peep2 from '../images/peep-2.png'
import Peep3 from '../images/peep3.png'


export default function ConversationSectioon() {
    return (
        <>
            <div className="conversationSection">
                <div className="bg-[#2E4E8B] radius_custom xl:pb-16 lg:pb-24 md:pb-28">
                    <div className="cols-10 mx-auto">
                        <div className="flex xl:justify-unset lg:justify-unset md:justify-unset sm:justify-center xs:justify-center xxs:justify-center xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xs:flex-wrap xxs:flex-wrap">
                            <div className="grid-cols-1 mt-80">
                                <div className="flex justify-center">
                                    <h1 className="xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl xs:text-xl xxs:text-lg font-semibold xl:w-[60%] lg:w-[60%] md:w-[67%] text-white xl:px-0 lg:px-0 md:px-0 sm:px-10 xs:px-16 xxs:px-16 ">
                                        More than 80% of small businesses report gaining their customers via word-of-mouth.<br></br> <i>Join the conversation.</i>
                                    </h1>
                                </div>
                                <div className="xl:mt-24 lg:mt-24 md:mt-24 sm:mt-20 xs:mt-16 xxs:mt-16 xl:ml-40 lg:ml-32 md:ml-16 flex xl:justify-unset lg:justify-unset md:justify-unset sm:justify-center xs:justify-center xxs:justify-center">
                                    <button class="bg-white hover:bg-gray-100 py-3 px-14 rounded-full shadow text-xl font-semibold text-[#101F55]">
                                        Start for free
                                    </button>
                                </div>
                            </div>
                            <div className="grid-cols-1 xl:mt-80 lg:mt-80 md:mt-80 sm:mt-4">
                                <div className="flex">
                                    <img src={Peep} className="xl:w-full lg:w-[60%]  md:w-[50%] sm:w-[30%] xs:w-[30%] xxs:w-[30%] object-contain peep_1 xl:-translate-x-[192px] xl:translate-y-[115px]   lg:-translate-x-[165px] lg:translate-y-[170px]  md:-translate-x-[100px]  md:translate-y-[150px] sm:translate-x-[70px] sm:translate-y-[0px] xs:translate-x-[70px] xs:translate-y-[0px] xxs:translate-x-[70px] xxs:translate-y-[0px]"></img>
                                    <img src={Peep2} className="xl:w-full lg:w-[60%]  md:w-[50%] sm:w-[30%] xs:w-[30%] xxs:w-[30%] object-contain peep_2 xl:-translate-x-[225px] xl:translate-y-[115px]  lg:-translate-x-[190px] lg:translate-y-[170px] md:-translate-x-[100px]  md:translate-y-[150px] sm:translate-x-[70px] sm:translate-y-[0px] xs:translate-x-[70px] xs:translate-y-[0px] xxs:translate-x-[70px] xxs:translate-y-[0px]"></img>
                                    <img src={Peep3} className="xl:w-full lg:w-[60%] md:w-[50%]  sm:w-[30%] xs:w-[30%] xxs:w-[30%] object-contain peep_3 xl:-translate-x-[406px] xl:translate-y-[115px]  lg:-translate-x-[330px] lg:translate-y-[170px] md:-translate-x-[204px]  md:translate-y-[150px] sm:translate-x-[0px] sm:translate-y-[0px] xs:translate-x-[0px] xs:translate-y-[0px] xxs:translate-x-[0px] xxs:translate-y-[0px]"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}