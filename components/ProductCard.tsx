import Link from 'next/link';
import { Product } from '../data/products';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white shadow-xl md:shadow rounded p-4 w-full relative mt-7 md:mt-0">
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="h-[250px] w-full object-cover rounded-md mb-4"
      />
      {product.discountRate > 0 && (
        <span className="absolute top-2 left-2 bg-[#9CCC3A] text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discountRate}%
        </span>
      )}
    </div>
    <h2 className="text-lg font-semibold text-[#1c719f]">{product.title}</h2>
    <p className="text-xs text-gray-500 my-2">{product.productabibility}</p>

    <div className="flex justify-between">
      <div className="flex items-center">
        <span className="text-xl font-bold mr-1">
          {product.currency} {product.currentPrice.toFixed(2)}
        </span>
        {/* <span className="line-through text-gray-400 text-xs">
          {product.currency} {product.originalPrice.toFixed(2)}
        </span> */}
      </div>

      <div>
        <div className="flex items-center text-yellow-400 mt-6 text-lg">
          {'★'.repeat(Math.floor(product.stars))}
          {'☆'.repeat(5 - Math.floor(product.stars))}
          <span className="ml-2 text-gray-600 text-sm">
            {product.stars.toFixed(1)}
          </span>
        </div>
        <Link
          href={`/products/${product._id}`}
          className="text-[#1c719f] hover:underline block text-xs mt-2 flex items-center gap-1"
        >
          See Details <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
        </Link>
      </div>
    </div>

    <p className="mt-10 border-t-2 border-gray-300 text-xs pt-2 w-full">Seller - Ratul</p>
  </div>
);

export default ProductCard;
