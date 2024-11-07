"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './instructor.css';

interface TestimonialData {
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    name: "Sarah H.",
    role: "Parent",
    feedback: "I ordered the educational toy set for my kids, and they absolutely love it! The toys are engaging and help them learn while playing. Highly recommended for any parent looking to combine fun with learning!",
    rating: 5,
  },
  {
    name: "Tom R.",
    role: "Teacher",
    feedback: "The toys are fantastic for the classroom! They keep the kids engaged, and I can already see an improvement in their problem-solving skills. Great quality, too!",
    rating: 5,
  },
  {
    name: "Lisa G.",
    role: "Gift Buyer",
    feedback: "Bought these as a birthday present for my nephew, and he won’t stop playing with them. It’s a relief to find toys that are fun, durable, and educational!",
    rating: 5,
  },
  {
    name: "Mark T.",
    role: "Toy Enthusiast",
    feedback: "These toys are well-designed and made with high-quality materials. They’re perfect for curious minds and encourage creativity. Love this shop!",
    rating: 5,
  },
  {
    name: "Emily W.",
    role: "Daycare Manager",
    feedback: "These toys are perfect for group activities at our daycare center. They’re safe, fun, and keep the kids learning while they play together. Great addition to our resources!",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="overflow-hidden mt-32  mx-6 md:mx-10" id="testimonial">

      <h2 className="section-text text-center md:text-left">Testimonials<span className="text-[#499FCE]"> ~</span></h2>

      <div data-aos="fade-up" data-aos-duration="1000">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-[80%] mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-[#499FCE] flex flex-col justify-center items-center text-center">
              <div className="mb-4 mt-5">
                <h2 className="text-2xl font-bold text-[#499FCE] italic">{testimonial.name}</h2>
                <p className="text-base font-medium text-[#9CCC3A]">{testimonial.role}</p>
              </div>
              <p className="text-base italic text-gray-800 mb-4">"{testimonial.feedback}"</p>
              <div className="flex justify-center items-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#9CCC3A]">&#9733;</span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">&#9733;</span>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
