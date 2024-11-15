import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaHome } from 'react-icons/fa';
import footerLogo from '../public/assets/images/logo1.png';
import Image from 'next/image';
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Dynamically get the current year

    return (
        <footer className="bg-[#1a2233] text-white pt-24 pb-16 mt-20 font-sans">
            <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left">
                    {/* Company Description */}
                    <div className="flex flex-col items-start space-y-4 h-full">
                        <Image
                            src={footerLogo}
                            width={100}
                            height={100}
                            alt="Company Logo">
                        </Image>
                        <p className="text-sm px-2 pb-5">
                            At MindHive, we are a team of digital wizards committed to transforming your online business. Our expertise spans comprehensive eCommerce store management, strategic media buying, insightful web analytics, and state-of-the-art data visualization. We empower your brand to excel in the digital marketplace.
                        </p>
                        <div className="flex justify-start space-x-4">
                            <a href="#" className="text-[#9CCC3A] hover:text-white transition-colors text-sm rounded-full bg-white hover:bg-[#9CCC3A]  p-2">
                                <FaFacebook size={17} />
                            </a>
                            <a href="#" className="text-[#9CCC3A] hover:text-white transition-colors text-sm rounded-full bg-white hover:bg-[#9CCC3A]  p-2">
                                <FaYoutube size={17} />
                            </a>
                            <a href="#" className="text-[#9CCC3A] hover:text-white transition-colors text-sm rounded-full bg-white hover:bg-[#9CCC3A]  p-2">
                                <FaWhatsapp size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Important Links */}
                    <div className="flex flex-col md:items-start space-y-4 h-full md:ml-10">
                        <h3 className="text-[#9CCC3A] text-xl font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-[#9CCC3A] transition-colors text-sm">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#9CCC3A] transition-colors text-sm">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#9CCC3A] transition-colors text-sm">Return and Refund Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Information */}
                    <div className="flex flex-col md:items-start space-y-4 h-full md:-ml-10">
                        <h3 className="text-[#9CCC3A] text-xl font-semibold mb-4">Company Information</h3>
                        <ul className="space-y-4">
                            <li className="flex text-[13px] hover:text-[#9CCC3A] cursor-pointer">
                                <FaMapMarkerAlt className="mr-2 text-[#9CCC3A]" size={21} />
                                30 N GOULD ST STE R, SHERIDAN, WY, 82801, UNITED STATES
                            </li>
                            <li className="flex text-[13px] hover:text-[#9CCC3A] cursor-pointer">
                                <FaPhoneAlt className="mr-2 text-[#9CCC3A]" size={21} />
                                +13073939624
                            </li>
                            <li className="flex text-[13px] hover:text-[#9CCC3A] cursor-pointer">
                                <FaHome className="mr-2 text-[#9CCC3A]" size={21} />
                                ABOUT US
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Centered Copyright Text */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center font-semibold">
                    <p className="md:text-sm text-xs">
                        Copyright © {currentYear} – <span className="text-[#9CCC3A]">MindHive LLC</span> | All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
