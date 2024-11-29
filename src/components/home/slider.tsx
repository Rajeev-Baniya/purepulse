"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import { ArrowNext, ArrowPrev } from '../icons/index';
import Link from 'next/link';
import Button from '../ui/button';



export default function Slider() {
    const swiperRef = useRef<SwiperType>();
    return (
        <div className='slider text-white'>
            <Swiper
                speed={900}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className='mySwiper'
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className="h-screen flex items-center"
                        style={{ backgroundImage: "linear-gradient(to  right, rgba(18, 17, 14, 0.7), rgba(18, 17, 14, 0.4)), url('/PowerPulse.jpg')", backgroundSize: 'cover', backgroundPosition: "center" }}
                    >
                        <div className='container mx-auto'>
                            <div className='mx-8 w-full'>
                                <h1 className='font-extrabold lg:text-[6.4rem] mb-[1.2rem] text-[4.8rem]'>Pure Pulse</h1>
                                <p className='font-extrabold md:text-[2.4rem] text-[2rem] mb-[2.4rem]'>Power your life<strong> Naturally</strong></p>
                                <p className='lg:w-[60%] w-[80%] mb-[3.6rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod atque qui impedit inventore, nisi facere quis maxime sequi voluptate unde! nisi facere quis maxime sequi voluptate unde!</p>
                                <div className='flex gap-10 items-center'>
                                    <Link href="/contact">
                                        <Button varient='secondary'>Buy Now</Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button varient='primary'>Learn More</Button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen flex items-center"
                        style={{ backgroundImage: "linear-gradient(to  right, rgba(18, 17, 14, 0.7), rgba(18, 17, 14, 0.4)), url('/herbs.jpg')", backgroundSize: 'cover', backgroundPosition: "center" }}
                    >
                        <div className='container mx-auto'>
                            <div className='mx-8 w-full'>
                                <h1 className='font-extrabold lg:text-[6.4rem] mb-[1.2rem] text-[4.8rem]'>100% Organic</h1>
                                <p className='font-extrabold md:text-[2.4rem] text-[2rem] mb-[2.4rem]'>Ingridients like Yarsagumba & Shilajit makes it healthy.</p>
                                <p className='lg:w-[60%] w-[80%] mb-[3.6rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod atque qui impedit inventore, nisi facere quis maxime sequi voluptate unde! nisi facere quis maxime sequi voluptate unde!</p>
                                <div className='flex gap-10 items-center'>
                                    <Link href="/contact">
                                        <Button varient='secondary'>Contact Us</Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button varient='primary'>Learn More</Button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-screen flex items-center"
                        style={{ backgroundImage: "linear-gradient(to  right, rgba(18, 17, 14, 0.7), rgba(18, 17, 14, 0.4)), url('/drink.jpg')", backgroundSize: 'cover', backgroundPosition: "center" }}
                    >
                        <div className='container mx-auto'>
                            <div className='mx-8 w-full'>
                                <h1 className='font-extrabold lg:text-[6.4rem] mb-[1.2rem] text-[4.8rem]'>20+ Health Benefits</h1>
                                <p className='font-extrabold md:text-[2.4rem] text-[2rem] mb-[2.4rem]'>Boost your energy level instantly.</p>
                                <p className='lg:w-[60%] w-[80%] mb-[3.6rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod atque qui impedit inventore, nisi facere quis maxime sequi voluptate unde! nisi facere quis maxime sequi voluptate unde!</p>
                                <div className='flex gap-10 items-center'>
                                    <Link href="/contact">
                                        <Button varient='secondary'>Order Now</Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button varient='primary'>Learn More</Button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='slider_nav  md:block hidden'>
                <button className='absolute top-1/2 -translate-y-1/2 z-20 left-[1.6rem]' onClick={() => swiperRef.current?.slidePrev()}><ArrowPrev width={35} color="white" /></button>
                <button className='absolute top-1/2 -translate-y-1/2 z-20 right-[1.6rem]' onClick={() => swiperRef.current?.slideNext()}><ArrowNext width={35} color="white" /></button>
            </div>
        </div>
    )

}