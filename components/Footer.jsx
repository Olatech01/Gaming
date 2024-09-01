
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <section className="py-16 px-4 bg-gray-900 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold animate-fade-in text-white">Find Us</h2>
                    <p className="mt-6 text-lg animate-fade-in-up text-white">123 Gaming Street, Gamerville, USA</p>
                    <div className="mt-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094125!2d144.9537353156823!3d-37.81627974202196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f3f5cb5a1d03!2sGaming+Street!5e0!3m2!1sen!2sus!4v1548759168695"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="w-full rounded-lg"
                        ></iframe>
                    </div>
                    <div className="mt-12">
                        <a href="mailto:info@gaminghouse.com" className="text-xl hover:text-red-600 text-white animate-fade-in-up">info@gaminghouse.com</a>
                        <p className="mt-4 text-lg text-white">Follow us on <a href="#" className="hover:text-red-600">Facebook</a>, <a href="#" className="hover:text-red-600">Instagram</a>, and <a href="#" className="hover:text-red-600">Twitter</a></p>
                    </div>
                </div>
            </section>
            <div
                id="Contact"
                className="lg:flex gap-5 justify-between mt-[2%] bg-gray-900  lg:h-[60vh] items-center sm:text-center sm:justify-between md:justify-center sm:py-[20px] w-full"
            >
                <div className="flex items-center gap-2 lg:pl-[5%] max-sm:justify-center max-sm:pt-5 md:justify-center md:pt-5">
                    <Image height={100} width={30} src={"/geo-alt-fill.svg"} alt="" />
                    <p className="text-white font-medium text-center md:text-xl">
                        PlaySport UniGate, Off University Of Ilorin Road, <br /> Tanke,
                        Ilorin, Kwara State
                    </p>
                </div>
                <div className="md:flex md:items-center md:justify-center">
                    <Image
                        // className="lg:h-[50vh] max-sm:h-[30vh] drop-shadow-2xl"
                        width={400}
                        height={400}
                        src={"/pad.png"}
                        alt=""
                    />
                </div>
                <div className="flex gap-5 flex-col lg:pr-5 max-sm:items-center max-sm:pb-5 md:items-center sm:items-center md:pb-5">
                    <h1 className="text-white font-semibold text-2xl md:text-3xl">
                        <u>Contact Us</u>
                    </h1>
                    <div className="flex lg:gap-5 flex-col max-sm:items-center text-white max-sm:justify-center max-sm:gap-1 max-sm:font-bold">
                        <div className="flex items-center gap-2">
                            <a className="flex items-center" href="">
                                <Image height={100} width={20} src={"/instagram.svg"} alt="" />
                            </a>
                            <p className="flex items-center font-medium cursor-pointer md:text-xl">
                                @joys_tickjunction
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="">
                                <Image height={100} width={20} src={"/envelope.svg"} alt="" style={{ color: "white" }} />
                            </a>
                            <p className="flex items-center font-medium cursor-pointer md:text-xl">
                                joystickjunction3@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="">
                                <Image height={100} width={20} src={"/telephone.svg"} alt="" />
                            </a>
                            <p className="flex items-center font-medium cursor-pointer md:text-xl">
                                +2349134682828
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="https://wa.link/b08iy4">
                                <Image height={100} width={20} src={"/whatsapp.svg"} alt="" />
                            </a>
                            <p className="flex items-center font-medium cursor-pointer md:text-xl">
                                +2349042094868
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer