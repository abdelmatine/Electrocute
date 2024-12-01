import React, { useState } from 'react';
import { categories } from '../../data/categories';
import Button from '../Shared/Button';

const Category = () => {
  const [visibleCategories, setVisibleCategories] = useState(3);

  const loadMoreCategories = () => {
    setVisibleCategories((prev) => prev + 3);
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, visibleCategories).map((category, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={category.aosDelay}
              key={category.id}
              className={`hover:scale-105 duration-500 relative overflow-visible py-10 pl-5 bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} text-white rounded-3xl h-[320px] flex items-center ${index % 3 === 0 ? 'col-span-2' : ''}`}
            >
              {/* Content Container */}
              <div className="absolute top-2/3 left-5 transform -translate-y-1/2 z-10">
                <p className="mb-1 text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className={`text-4xl xl:text-5xl font-bold ${category.textOpacity} mb-2`}>
                  {category.title}
                </p>
                <Button text="Browse" bgColor={category.buttonBg} textColor={category.buttonText} />
              </div>
              
              {/* Image */}
              <img src={category.imgSrc} alt={category.title} className={`${category.imgClass} z-0 hover:scale-105 duration-500`} />
            </div>
          ))}
        </div>
        {visibleCategories < categories.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMoreCategories}
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

export default Category;
