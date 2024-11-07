import React from 'react';
import { products } from '../data/products';
import AllProductCard from './AllProductCard';

const AllProductList: React.FC = () => (
    <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 mx-auto">
        {products.map((product) => (
            <AllProductCard key={product._id} product={product}></AllProductCard>
        ))}
    </div>
);

export default AllProductList;
