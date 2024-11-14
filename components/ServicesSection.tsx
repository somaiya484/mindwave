import React from 'react';
import { FaShippingFast, FaUndo, FaGift, FaCheckCircle } from 'react-icons/fa';

const ServicesSection = () => {
    return (
        <div className="p-10 bg-white mt-20">
            <h2 className="text-center md:text-left text-4xl font-bold mb-6">
                Our Services<span className="text-[#499FCE]"> ~</span>
            </h2>

            {/* Services */}
            <div className="md:flex items-center gap-6 mb-10">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-2">
                        <div className="p-4 border-2 border-[#499FCE] rounded-full">
                            <FaShippingFast className="text-[#499FCE] text-xl" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-lg">Free Shipping</h3>
                    <p className="text-gray-500">We provide free shipping.</p>
                </div>

                {/* Divider Line for large screens */}
                <div className="hidden md:block border border-gray-300 h-20 mx-auto"></div>

                <div className="flex flex-col items-center  my-8">
                    <div className="flex flex-col items-center mb-2">
                        <div className="p-4 border-2 border-[#499FCE] rounded-full">
                            <FaUndo className="text-[#499FCE] text-xl" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-lg">Return Policy</h3>
                    <p className="text-gray-500">We give opportunity return.</p>
                </div>

                <div className="hidden md:block border border-gray-300 h-20 mx-auto"></div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <div className="p-4 border-2 border-[#499FCE] rounded-full">
                            <FaGift className="text-[#499FCE] text-xl" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-lg">Gift Card</h3>
                    <p className="text-gray-500">You can get Gift Card.</p>
                </div>

                <div className="hidden md:block border border-gray-300 h-20 mx-auto"></div>

                <div className="flex flex-col items-center mt-7 md:mt-0">
                    <div className="flex flex-col items-center mb-2">
                        <div className="p-4 border-2 border-[#499FCE] rounded-full">
                            <FaCheckCircle className="text-[#499FCE] text-xl" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-lg">Best Quality</h3>
                    <p className="text-gray-500">We provide best services.</p>
                </div>
            </div>

            {/* Promo Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-200 rounded-lg flex justify-between items-center gap-5">
                    <img src="/assets/images/s1.png" alt="On Sale" className="mx-auto w-[60%] h-60" />
                    <div className='pr-6'>
                        <h3 className="text-2xl font-bold ">ON SALE!</h3>
                        <p>SAVE UP TO 30% OFF</p>
                        <button className="mt-4 px-6 bg-[#499FCE] py-2 text-white rounded-full">SHOP NOW</button>
                    </div>
                </div>

                <div className="bg-yellow-200 rounded-lg p-6 flex justify-between items-center gap-5">
                    <div>
                        <h3 className="text-2xl font-bold ">CUTE TOY</h3>
                        <p className="">LATEST COLLECTION</p>
                        <button className="mt-4 px-6 py-2 bg-[#499FCE] text-white rounded-full">SHOP NOW</button>
                    </div>
                    <img src="/assets/images/s2.png" alt="On Sale" className="mx-auto w-2/4 h-52" />
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
