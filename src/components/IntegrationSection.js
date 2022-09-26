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
                <div className="w-[88%] bg-[#4B83C5] h-auto rounded-r-2xl integration-width">
                    <div className="grid justify-content">
                        <div className="flex justify-around sm:flex-wrap xs:flex-wrap xxs:flex-wrap py-14 xl:gap-0 lg:gap-0 md:gap-12 sm:gap-12 xs:gap-12 xxs:gap-12">
                            <div className="self-center">
                                <div className="flex xl:justify-start lg:justify-start md:justify-center sm:justify-center xs:justify-center xxs:justify-center ">
                                    <h1 className="xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-2xl xxs:text-xl font-bold text-white">Integrations</h1>
                                </div>
                                <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg xxs:text-sm font-normal text-white xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8 xs:mt-6 xxs:mt-4 xl:text-left lg:text-left md:text-center sm:text-center xs:text-center xxs:text-center">Upgrowth works with all the tools you <br/><strong>already use</strong> to run your business</p>
                            </div>
                            <div className="Icon_grid_custom xl:translate-x-[50px] xl:translate-y-[0px] lg:translate-x-[30px] lg:translate-y-[0px]">
                                <div className="grid grid-cols-3  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:col-span-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-2 gap-6">
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
            </div>
        </>
    )
}
