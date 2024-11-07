import AllProductList from "@/components/AllProductList";
import { FaArrowRight } from "react-icons/fa";


const page = () => {
    return (
        <section className=" mt-32 px-6 md:px-10">
            <div className="flex justify-between items-center mb-10">

                <h2 className="section-text">All Products<span className="text-[#499FCE]"> ~</span></h2>
                
            </div>

            <AllProductList></AllProductList>
        </section>
    )
}

export default page
