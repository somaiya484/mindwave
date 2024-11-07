// components/ProductList.tsx
import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => (
  <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 mx-auto">
    {products.slice(0, 16).map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);

export default ProductList;
