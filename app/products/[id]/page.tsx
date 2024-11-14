"use client";
import { useParams } from 'next/navigation';
import { products } from '../../../data/products';
import { FaRegHeart, FaSave, FaShareAlt } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((product) => product._id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-10xl mx-auto px-16 mt-24 mb-20">
      <div className="md:flex items-stretch gap-20 min-h-[400px]">
        <div className="flex-1 flex justify-center items-center">
          {/* Image container */}
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full object-contain border border-gray-200"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-[#1c719f]">{product.title}</h1>

          <p className="mt-6 text-gray-700">{product.description}</p>

          <div className="w-1/2 flex items-center gap-5 my-5">
            <div className="flex items-center gap-2 bg-red-100 text-red-500 px-2 py-1 rounded">
              <FaRegHeart /> {product.reviewsCount}
            </div>

            <FaSave className="text-xl text-[#80b418]" />
            <FaShareAlt className="text-xl text-[#80b418]" />
          </div>

          <hr />

          <div>
            <div className="flex mt-5 gap-6">
              <div className="text-start mb-2">
                <p className="text-3xl font-bold text-[#1c719f]">
                  {product.currency} {product.currentPrice.toFixed(2)}
                </p>
                {product.originalPrice && (
                  <p className="text-gray-500 line-through">
                    {product.currency} {product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>

              <div className="text-yellow-400 text-lg">
                {"★".repeat(Math.floor(product.stars))}
                {"☆".repeat(5 - Math.floor(product.stars))}
                <p className="text-gray-600 text-sm">
                  {product.stars.toFixed(1)} ({product.reviewsCount} reviews)
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500 pb-5">
              {product.productabibility} Most of the parents liked it
            </p>
            <hr />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <div className="bg-gray-100 rounded-lg py-3 px-5 border-l-2 ">
              <p className="text-sm text-gray-700">Current Price</p>
              <p className="text-2xl font-semibold">🎗️ ${product.currentPrice}</p>
            </div>

            <div className="bg-gray-100 rounded-lg py-3 px-5 border-l-2 ">
              <p className="text-sm text-gray-700">Original Price</p>
              <p className="text-2xl font-semibold">🔰 ${product.originalPrice}</p>
            </div>

            <div className="bg-gray-100 rounded-lg py-3 px-5 border-l-2 ">
              <p className="text-sm text-gray-700">Save</p>
              <p className="text-2xl font-semibold">🔖 {product.discountRate}%</p>
            </div>

            <div className="bg-gray-100 rounded-lg py-3 px-5 border-l-2 ">
              <p className="text-sm text-gray-700">Lowest Price</p>
              <p className="text-2xl font-semibold">🧮 $10</p>
            </div>
          </div>

          <button className="mt-8 bg-[#1c719f] text-white px-4 py-2 rounded hover:bg-[#175a84] self-start">
            Add to Cart
          </button>
        </div>
      </div>

      <p className="mt-10 border-t-2 border-gray-300 text-xs pt-4 text-gray-600">
        Seller: Ratul
      </p>
    </div>
  );
};

export default ProductDetails;
