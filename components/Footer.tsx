// import Link from 'next/link';
// import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
// 

// 

// const Footer: React.FC = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="footer bg-slate-900 text-white pt-16 pb-5 px-5">
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//                 {/* Logo and Message */}
//                 <div className="text-center md:text-left">
//                     <Link href='/'>
//                         <Image
//                             src={footerLogo}
//                             width={250}
//                             height={250}
//                             alt="Company Logo"
//                             className="w-[100px] mx-auto md:mx-0"
//                         />
//                     </Link>
//                     <p className='md:pr-10 mt-3'>
//                         Thank you for visiting our website. We appreciate your support and look forward to helping you achieve your goals. Here's to success and collaboration!
//                     </p>
//                 </div>

//                 {/* Services Section */}
//                 <nav className="text-center md:text-left">
//                     <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
//                     <ul>
//                         {[
//                             { name: "About Us", link: "" },
//                             { name: "All Products", link: "" },
//                             { name: "Services", link: "" },
//                             { name: "Gallery", link: "" },
//                             { name: "Testimonials", link: "" },
//                             { name: "Contact us", link: "" },
//                         ].map(service => (
//                             <li key={service.name}>
//                                 <Link className="link link-hover text-gray-400 hover:underline hover:text-white" href={service.link}>{service.name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>

//                 {/* Company Links Section */}
//                 <nav className="text-center md:text-left">
//                     <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
//                     <ul>
//                         {[
//                             { name: 'About Us', link: '/#about' },
//                             { name: 'Services', link: '/#services' },
//                             { name: 'Why Choose Us', link: '/#why-choose-us' },
//                             { name: 'Company', link: '/#company' },
//                             { name: 'Testimonial', link: '/#testimonial' },
//                             { name: 'FAQ', link: '/#QaN' },
//                             { name: "Contact", link: "/contact" }
//                         ].map(link => (
//                             <li key={link.name}>
//                                 <Link className="link link-hover text-gray-400 hover:underline hover:text-white" href={link.link}>{link.name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>

//                 {/* Contact and Social Links */}
//                 <nav className="text-center md:text-left">
//                     <h6 className="footer-title text-lg font-semibold mb-4">Say Hello to Us</h6>
//                     <ul>
//                         <li>
//                             <a className="link link-hover text-gray-400 hover:underline hover:text-white" href="mailto:admin@mindhive.com">
//                                 Email: admin@mindhive.com
//                             </a>
//                         </li>
//                     </ul>
//                     <div className="flex gap-8 items-center justify-center mt-5 md:justify-start text-2xl text-gray-400">
//                         <a href='' className='cursor-pointer hover:text-white'><FaLinkedin /></a>
//                         <a href='' className='cursor-pointer hover:text-white'><FaInstagram /></a>
//                         <a href='' className='cursor-pointer hover:text-white'><FaFacebookF /></a>
//                         <a href='' className='cursor-pointer hover:text-white'><FaYoutube /></a>
//                     </div>
//                 </nav>
//             </div>

//             {/* Footer Bottom */}
//             <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col mt-10">
//                 <p className="caption text-n-4 lg:block">
//                     © {currentYear} MindHive | all rights reserved by MindHive.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



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
