import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneVolume, FaYoutube } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";



export default function Footer() {
    return (
        <section className="common-padding_small bg-black !pb-[2rem]">
            <div className="grid grid-cols-12 justify-between mb-[4.2rem] md:gap-0 gap-y-[2.6rem] text-white">
                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Learn More</h1>
                    <div className="flex flex-col gap-6 text-grey">
                        <Link href="/about">About</Link>
                        <Link href="/contact">Discover</Link>
                        <a href="/projects">News</a>
                    </div>

                </div>
                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Partners</h1>
                    <div className="flex flex-col gap-6 text-grey">

                        <a href="#" target="_blank">Patanjali</a>
                        <a href="#" target="_blank">Organic Nepal</a>
                        <a href="#" target="_blank">Herbals</a>
                    </div>

                </div>





                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Follow Us Here</h1>
                    <div className="flex gap-6 text-grey">

                        <a href='#' target="_blank">  <FaFacebookF className='text-[1.8rem]' /> </a>
                        <a href='#' target="_blank"><FaInstagram className='text-[1.8rem]' /></a>
                        <a href='#' target="_blank"> <FaYoutube className='text-[1.8rem]' /></a>
                        <a href='#'> <FaLinkedin className='text-[1.8rem]' /></a>
                    </div>

                </div>


                <div className="col-span-6 md:col-span-3">
                    <h1 className="font-semibold mb-[2rem] text-[1.7rem]">Contact</h1>
                    <div className="flex flex-col gap-6 text-grey">

                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-primary_shade rounded-[50%] text-white"><IoLocation /></span> <span>Kathmandu, Nepal</span></a>
                        <a href="#" className="flex items-center gap-3"><span className="p-3 bg-primary_shade rounded-[50%] text-white"><IoMail /></span> <span className="break-all">purepulse@gmail.com</span></a>
                        <a href="tel:+977 9805891112" className="flex items-center gap-3"><span className="p-3 bg-primary_shade rounded-[50%] text-white"><FaPhoneVolume /></span> <span>+977 981234567</span></a>

                    </div>
                </div>

            </div>
            <div className="text-center">
                <p className="logo block mb-2 text-white !text-[2.2rem]">Pure<span className="text-primary">Pulse</span> </p>
                <p className="text-grey text-[2rem]"> &copy;  All rights reserved.</p>
            </div>
        </section>
    )
}