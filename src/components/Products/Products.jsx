import React, { useState } from 'react';
import { products } from '../../data/productsData';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body Section */}
        <ProductCard data={products.slice(0, visibleProducts)} />
        {visibleProducts < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMoreProducts}
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
