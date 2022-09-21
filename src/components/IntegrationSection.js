import React from 'react'
import S from '../images/slogo.png'
import google from '../images/google.png'
import zoom from '../images/zoom.png'
import meta from '../images/meta.png'
import shopify from '../images/Shopify.png'
import amazon from '../images/amazon.png'

export default function IntegrationSection() {
    return (
        <>
            <div className="integration-section">
                <div className="w-[85%] bg-[#4B83C5] h-auto rounded-r-xl">
                    <div className="grid justify-content">
                        <div className="flex justify-around sm:flex-wrap py-14">
                            <div className="self-center">
                                <h1 className="text-5xl font-bold text-white">Integrations</h1>
                                <p className="text-2xl font-normal text-white mt-8">Upgrowth works with all the tools you <br></br><strong>already use</strong> to run your business</p>
                            </div>
                            <div className="grid grid-cols-3 md:col-span-2 gap-6">
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[20px] bg-white">
                                    <img src={S} className="w-[70%] h-[70%] flex"></img>
                                </div>
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[20px] bg-white">
                                    <img src={google} className="w-[70%] h-[70%] flex"></img>
                                </div>
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[20px] bg-white">
                                    <img src={zoom} className="w-[70%] h-[70%] flex"></img>
                                </div>
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[20px] bg-white">
                                    <img src={meta} className="w-[70%] h-[70%] flex"></img>
                                </div>
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[20px] bg-white">
                                    <img src={shopify} className="w-[70%] h-[70%] flex"></img>
                                </div>
                                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[20px] bg-white">
                                    <img src={amazon} className="w-[70%] h-[70%] flex"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
