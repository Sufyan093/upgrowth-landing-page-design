import React from 'react'

export default function SimplePricing() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8baecd" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,144C960,128,1200,128,1320,128L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div className="mb-28">
                <div className="block">
                    <div>
                        <h1 className="text-[56px] font-bold text-center">Simple Pricing.</h1>
                    </div>
                    <div className="flex justify-center sm:flex-wrap md:gap-4 lg:gap-8 mt-14">
                        <div className="bg-white shadow-lg	w-[26rem] rounded-[20px] p-6 lg:h-[450px] px-10">
                            <div className="flex justify-center">
                                <span className="text-center text-white bg-[#2E4E8B] rounded-full text-sm font-medium py-1 px-8 uppercase">Basic</span>
                            </div>
                            <div className='flex items-baseline gap-4 pt-6'>
                                <h1 className="text-5xl font-bold">Free</h1>
                                <h5 className="text-xl font-semibold text-[#828282]">30 day trial</h5>
                            </div>
                            <ul className="grid gap-4 pt-6">
                                <li>
                                    <span className="flex text-lg	font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        Stripe Integration</span>
                                </li>
                                <li>
                                    <span className="flex text-lg	font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        Social Media Integrations</span>
                                </li>
                                <li><span className="flex text-lg	font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                    Data Analytics Tools</span>
                                </li>
                            </ul>
                        </div>


                        <div className="bg-white shadow-lg	w-[26rem] rounded-[20px] p-6 lg:h-[450px] px-10">
                            <div className="flex justify-center">
                                <span className="text-center text-white bg-[#53A89A] rounded-full text-sm font-medium py-1 px-8 uppercase">Premium</span>
                            </div>
                            <div className='flex items-baseline gap-4 pt-6'>
                                <h1 className="text-5xl font-bold">$150</h1>
                                <h5 className="text-xl font-semibold text-[#828282]">/ per month</h5>
                            </div>
                            <ul className="grid gap-4 pt-6">
                                <li>
                                    <span className="flex text-lg font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        Stripe Integration</span>
                                </li>
                                <li>
                                    <span className="flex text-lg font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        Custom Campaign Creation</span>
                                </li>
                                <li>
                                    <span className="flex text-lg font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        Social Media Integrations</span>
                                </li>
                                <li><span className="flex text-lg	font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                    Data Analytics Tools</span>
                                </li>
                                <li><span className="flex text-lg	font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                    Complete Feed</span>
                                </li>
                                <li><span className="flex text-lg	font-semibold text-[#6F6F6F] items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                    Strategic Referral Recommendations</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
