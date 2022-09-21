import React from 'react'
import Peep from '../images/peep.png'
import Peep2 from '../images/peep-2.png'
import Peep3 from '../images/peep3.png'


export default function ConversationSectioon() {
    return (
        <>
            <div className="conversationSection">
                <div className="bg-[#2E4E8B] radius_custom pb-16">
                    <div className="cols-10 mx-auto">
                        <div className="flex justify-center">
                            <div className="grid-cols-1 mt-80">
                                <div className="flex justify-center">
                                    <h1 className="text-4xl font-semibold w-[60%] text-white">
                                        More than 80% of small businesses report gaining their customers via word-of-mouth.<br></br> <i>Join the conversation.</i>
                                    </h1>
                                </div>
                                <div className="mt-24   ml-40">
                                    <button class="bg-white hover:bg-gray-100 py-3 px-14 rounded-full shadow text-xl font-semibold text-[#101F55]">
                                        Start for free
                                    </button>
                                </div>
                            </div>
                            <div className="grid-cols-1 mt-80">
                                <div className="flex">
                                    <img src={Peep} className="w-full object-contain peep_1"></img>
                                    <img src={Peep2} className="w-full object-contain peep_2"></img>
                                    <img src={Peep3} className="w-full object-contain peep_3"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
