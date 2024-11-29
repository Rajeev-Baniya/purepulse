"use client";

import Image from "next/image";
import { testimonials } from "../../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
// import { Swiper as SwiperType } from 'swiper';


export default function Testimonial() {
    return (
        <section className="common-padding_small text-center !bg-fixed !bg-center !bg-cover slider" style={{ background: `linear-gradient(to right top, rgba(18, 17, 14, 0.3), rgba(18, 17, 14, 0.7) , rgba(18, 17, 14, 0.3)), url('/herbs.jpg')` }}>
            <Swiper
                speed={900}
                loop={true}
                className='mySwiper'
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
                pagination={{ dynamicBullets: true, clickable: true }}

            >
                {testimonials.map((each) => (
                    <SwiperSlide key={each.id}>
                        <div className="text-center" >
                            <Image src={`${each.image}`} width={24} height={24} alt="Rajeev" className="object-cover h-[8rem] w-[8rem] rounded-[50%] brightness-[70%] mx-auto mb-[3rem]" />
                            <p className="italic text-[2rem] font-sans mb-7 font-semibold"> &quot; {each.testimonial} &quot;</p>
                            <p className="italic text-grey font-sans font-semibold mb-[4rem]">- {each.name}</p>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </section>
    )
}