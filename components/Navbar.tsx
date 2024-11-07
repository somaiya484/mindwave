'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';




const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full relative">
      <nav className="nav flex justify-between items-center bg-white ">
        {/* Menu Icon */}
        <button onClick={toggleSidebar} aria-label="Toggle menu" className="text-2xl">
          <IoMenu className="nav-logo" />
        </button>

        {/* Logo */}
        <Link href="/" className="mt-2">
          <Image
            src="/assets/images/logo1.png"
            width={115}
            height={100}
            alt="logo"
          />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-5 space-y-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/allproducts" className="text-gray-300 hover:text-white">All Products</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link href="" className="text-gray-300 hover:text-white"><button className="mt-4 px-6 py-2 bg-[#499FCE] text-white rounded-full">SHOP NOW</button>
          </Link>
          
          {/* Add other nav items here */}
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
