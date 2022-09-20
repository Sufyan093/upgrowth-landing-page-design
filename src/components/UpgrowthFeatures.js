import React from 'react'
import graph from '../images/Group.png'
function UpgrowthFeatures() {
    return (
        <>
            <div className="flex justify-center mt-28 pb-28">
                <div className="container">
                    <div className="grid-cols-10 mx-auto">
                        <div className="row-span-full">
                            <div className="grid lg:grid-cols-4 place-items-center gap-10 ">
                                <div className="col-span-2 ml-20">
                                    <h1 className="upgrowth_title">UpGrowth features: </h1>
                                    <div className="grid gap-8 mt-10">
                                        <a href="" className="flex items-center gap-4 upgrowth_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="grid">
                                                <span className="text-xl font-bold">Intuitive campaign creation</span>
                                                <span>No-code, no-stress</span>
                                            </div>
                                        </a>
                                        <a href="" className="flex items-center gap-4 upgrowth_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                            </svg>

                                            <div className="grid">
                                                <span className="text-xl font-bold">Real-time analytics</span>
                                                <span>Dynamic dashboards at your fingertips</span>
                                            </div>
                                        </a>
                                        <a href="" className="flex items-center gap-4 upgrowth_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                            </svg>

                                            <div className="grid">
                                                <span className="text-xl font-bold">Frictionless payouts</span>
                                                <span>Secure in-app transactions</span>
                                            </div>
                                        </a>
                                        <a href="" className="flex items-center gap-4 upgrowth_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                            </svg>

                                            <div className="grid">
                                                <span className="text-xl font-bold">Feed</span>
                                                <span>Web-wide insights on your brand</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-span-2 h-fit mt-28">
                                    <div className="p-6 rounded-lg shadow-md dark:border-gray-700 bg">
                                        <h4 className="text-xl font-bold Referrals_title">Referrals by platform</h4>
                                        <div className="grid gap-2 mt-6">
                                            <div className="flex items-center gap-2">
                                                <span className="color_circle bg-circle-one"></span>
                                                <span className="text-xs font-normal referrals_size">Promo Code</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="color_circle bg-circle-two"></span>
                                                <span className="text-xs font-normal referrals_size ">Email</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="color_circle bg-circle-three"></span>
                                                <span className="text-xs font-normal referrals_size">Facebook</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="color_circle bg-circle-four"></span>
                                                <span className="text-xs font-normal referrals_size">Reddit</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="color_circle bg-circle-five"></span>
                                                <span className="text-xs font-normal referrals_size">Other</span>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="p-4 bg-white border rounded-lg shadow-md w-1/3 promo-card grid h-fit">
                                                <span className="text-base font-semibold">Promo Code : </span>
                                                <span className="text-4xl" style={{ color: "#788DF5" }}>45%</span>
                                                <span className="text-xs text-justify" style={{ color: "#6F6F6F" }}>Your direct Promo Code usages generated 45% of this campaign’s signups, with 61 referrals.</span>
                                            </div>
                                            <img src={graph} className="w-3/5" ></img>
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

export default UpgrowthFeatures