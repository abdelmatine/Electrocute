import React from 'react';
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png';
import Image3 from '../../assets/category/macbook.png';
import Image4 from '../../assets/category/gaming.png';
import Image5 from '../../assets/category/vr.png';
import Image6 from '../../assets/category/speaker.png';
import Button from '../Shared/Button';

const categories = [
  {
    id: 1,
    title: 'Earphone',
    gradientFrom: 'from-black/90',
    gradientTo: 'to-black/70',
    textOpacity: 'opacity-20',
    imgSrc: Image1,
    imgClass: 'w-[320px] absolute bottom-0',
    buttonBg: 'bg-primary',
    buttonText: 'text-white',
  },
  {
    id: 2,
    title: 'Gadget',
    gradientFrom: 'from-brandYellow',
    gradientTo: 'to-brandYellow/90',
    textOpacity: 'opacity-40',
    imgSrc: Image2,
    imgClass: 'w-[320px] absolute -right-4 lg:top-[40px]',
    buttonBg: 'bg-white',
    buttonText: 'text-brandYellow',
  },
  {
    id: 3,
    title: 'Laptop',
    gradientFrom: 'from-primary',
    gradientTo: 'to-primary/90',
    textOpacity: 'opacity-40',
    imgSrc: Image3,
    imgClass: 'w-[250px] absolute top-1/2 -translate-y-1/2 -right-0',
    buttonBg: 'bg-white',
    buttonText: 'text-primary',
    span: 'col-span-2',
  },
  {
    id: 4,
    title: 'Laptop',
    gradientFrom: 'from-gray-400/90',
    gradientTo: 'to-gray-100',
    textOpacity: 'opacity-40',
    imgSrc: Image4,
    imgClass: 'w-[250px] absolute top-1/2 -translate-y-1/2 -right-0',
    buttonBg: 'bg-white',
    buttonText: 'text-primary',
    span: 'col-span-2',
  },
  {
    id: 5,
    title: 'Earphone',
    gradientFrom: 'from-brandGreen/90',
    gradientTo: 'to-brandGreen/70',
    textOpacity: 'opacity-20',
    imgSrc: Image5,
    imgClass: 'w-[320px] absolute bottom-0',
    buttonBg: 'bg-white',
    buttonText: 'text-white',
  },
  {
    id: 6,
    title: 'Earphone',
    gradientFrom: 'from-black/90',
    gradientTo: 'to-black/70',
    textOpacity: 'opacity-20',
    imgSrc: Image6,
    imgClass: 'w-[320px] absolute bottom-0',
    buttonBg: 'bg-white',
    buttonText: 'text-white',
  },
];

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`py-10 pl-5 bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} text-white rounded-3xl relative h-[320px] flex items-end ${category.span || ''}`}
            >
              <div className="mb-4">
                <p className="mb-1 text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className={`text-4xl xl:text-5xl font-bold ${category.textOpacity} mb-2`}>
                  {category.title}
                </p>
                <Button text="Browse" bgColor={category.buttonBg} textColor={category.buttonText} />
              </div>
              <img src={category.imgSrc} alt={category.title} className={category.imgClass} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
