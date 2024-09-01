import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className="service bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('/recent.png')" }}>
            <div className="flex flex-col items-center justify-center lg:gap-[50px] mt-[5%] sm:gap-[20px]">
                <h1 className="lg:text-5xl sm:text-4xl font-extrabold">Services</h1>
                <div className="flex">
                    <div className="flex gap-5 flex-col lg:items-center lg:justify-center max-sm:items-center md:items-center">
                        <h1 className="font-bold lg:text-2xl md:text-3xl">
                            <u>Experience Our Services:</u>
                        </h1>
                        <ul className="flex gap-3 flex-col font-medium max-sm:px-5">
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">FC 24/25</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">COD and Mortal Kombat</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Snooker and Air Hockey</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">VR Gaming Experience and Tournaments</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">PS5 and PS4 Console Repairs and Maintenance</li>
                            </div>
                        </ul>
                    </div>
                    <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10 md:items-center md:mt-10 md:flex md:justify-center">
                        <Image height={100} width={400} src={"/bluepad.png"} alt="" />
                    </div>
                    <div className="flex gap-5 flex-col lg:items-center lg:justify-center max-sm:items-center md:items-center">
                        <h1 className="font-bold text-2xl">
                            <u>Shop With Us:</u>
                        </h1>
                        <ul className="flex gap-3 flex-col font-medium max-sm:px-5">
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Video Games: PS5, PS4, and More</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Gaming Gadgets</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Gaming Consoles</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Accessories</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Games Installation</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Board Games: Chess, Monopoly, Scrabble e.t.c</li>
                            </div>
                        </ul>
                        <a className="font-semibold p-3 relative bottom-[10rem] sm:h-20 sm:w-20 sm:left-[15rem] sm:bottom-[12rem] left-12 rounded-full bg-black text-white hover:bg-white hover:text-black" href="https://wa.link/b08iy4"><button>ORDER <br /> NOW</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
