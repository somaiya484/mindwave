// Importing required components and types
import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import ProductList from "@/components/ProductList";
import { FC } from "react";
import FlashSale from "@/components/FlashSale";
import ServicesSection from "@/components/ServicesSection";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import { FaArrowRight } from "react-icons/fa";

// Define Home as a Functional Component
const Home: FC = () => {
  return (
    <>
      <section className="px-6 md:px-10 pt-10 pb-24 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className=" text-[#80b418] flex items-center gap-2">
              Smart Shopping Starts Here
              <FaArrowRight />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-[#499FCE]"> MindHive</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>


      <FlashSale></FlashSale>

      <ServicesSection></ServicesSection>


      {/* Trending section */}
      <section className=" mt-32 px-6 md:px-10">
        <div className="flex justify-between items-center mb-10">

          <h2 className="section-text">All Products<span className="text-[#499FCE]"> ~</span></h2>
          <button className="mt-4 px-6 py-2 text-lg bg-[#499FCE] text-white flex items-center gap-2 rounded">View All <FaArrowRight /></button>
        </div>

        <ProductList />
      </section>

      <Gallery></Gallery>
      <Testimonial></Testimonial>

    </>
  );
};

export default Home;
