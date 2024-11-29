"use client";

import Button from "@/components/ui/button";
import { pricing } from "../../../../data";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function PricingList() {
    return (
        <div className="slider bg-black_extra">
            <Swiper
                speed={900}
                loop={true}
                className='mySwiper'
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                slidesPerView={4}
                spaceBetween={18}
                pagination={{ dynamicBullets: true, clickable: true }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,

                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}

            >
                {pricing.map((each) => (
                    <SwiperSlide key={each.id}>
                        <div className="w-full h-[32rem] rounded-t-[1rem] relative flex justify-center items-center " style={{ background: `linear-gradient(to right top, rgba(18, 17, 14, 0.3), rgba(18, 17, 14, 0.7) , rgba(18, 17, 14, 0.3)), url(${each.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <div className="text-center">
                                <h1 className="text-[#ffffff] font-bold text-5xl mb-3">{each.title}</h1>
                                <p>{each.title} Pure Pulse</p>
                            </div>
                            {each?.discount ? <p className="absolute bottom-5 right-5 bg-primary rounded-[2rem] px-3 py-1">{each.discount} off</p> : <></>}
                        </div>
                        <div className={`px-6 py-8 ${each.active ? 'bg-black_third' : ' bg-black_forth'} text-center rounded-b-[1rem] lg:mb-0 !mb-[4rem]`}>
                            <p className="mb-8 text-5xl font-bold"><sup className="text-3xl">Rs.</sup> {each?.discountedPrice ? <> <span>{each.discountedPrice} </span> <span className="line-through text-4xl text-grey">{each.price}</span> </> : each.price}</p>
                            <p className="text-grey text-[1.4rem] mb-[3rem]">{each.description}</p>
                            <Button varient={`${each.active ? 'primary' : 'secondary'}`} className={"mb-[2rem]"}>Buy Now</Button>
                            <br />
                            <a href="#" className="inline-block text-primary font-bold">or Read More...</a>
                        </div>
                    </SwiperSlide>
                ))
                }

            </Swiper>
        </div>

    )
}