'use client'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { products } from '../data/products';
import Link from 'next/link';

type Product = {
    _id: string;
    currency: string;
    image: string;
    title: string;
    currentPrice: number;
    originalPrice: number;
    discountRate: number;
    stars: number;
    reviewsCount: number;
};

const FlashSale: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60); // 24 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number) => {
        const days = Math.floor(time / (24 * 3600));
        const hours = Math.floor((time % (24 * 3600)) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000, 
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    const lastNineProducts = products.slice(-9);


    return (
        <div className="p-6 page-background px-6 md:px-10">
            <div className="flex items-center gap-6">
                <h2 className="text-2xl md:text-4xl font-bold text-[#499FCE]">Flash Sale</h2>
                <div className="flex items-center space-x-4 bg-[#499FCE] text-white px-2 md:px-6 py-2 ">
                    <div className="text-center">
                        <p className="md:text-2xl font-bold">{String(days).padStart(2, '0')} : </p>
                        <p className="text-xs">Days</p>
                    </div>
                    <div className="text-center">
                        <p className="md:text-2xl font-bold">{String(hours).padStart(2, '0')} : </p>
                        <p className="text-xs">Hours</p>
                    </div>
                    <div className="text-center">
                        <p className="md:text-2xl font-bold">{String(minutes).padStart(2, '0')} : </p>
                        <p className="text-xs">Minutes</p>
                    </div>
                    <div className="text-center">
                        <p className="md:text-2xl font-bold">{String(seconds).padStart(2, '0')}</p>
                        <p className="text-xs">Seconds</p>
                    </div>
                </div>
            </div>

            <Slider {...settings} className="overflow-hidden border border-[#499FCE]">
            {lastNineProducts.map((product: Product) => (
                    <div key={product._id} className="p-4">
                        <div className="bg-white shadow rounded p-4 w-full relative">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-[250px] w-full object-cover rounded-md mb-4"
                                />
                            </div>
                            <div className='text-center'>
                                <h3 className="text-xl font-semibold">{product.title}</h3>
                                <div className="text-yellow-500 font-semibold">⭐ {product.stars}</div>
                                <div className="text-gray-500 text-xs mb-2">({product.reviewsCount} reviews)</div>
                                <div className="flex items-center justify-center space-x-2 mt-2">
                                    <span className="text-red-500 font-bold text-lg">{product.currency}{product.currentPrice}</span>
                                    <span className="line-through text-gray-500">{product.currency}{product.originalPrice}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FlashSale;
