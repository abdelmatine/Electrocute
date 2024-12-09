import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id:1,
        icon: <FaCarSide className="text-4xl ms-text-5xl text-primary"/>,
        title: "Free Shipping",
        description: "Free Shipping On All Order",
        aosDelay: "0",
    },
    {
        id:2,
        icon: <FaCheckCircle className="text-4xl ms-text-5xl text-primary"/>,
        title: "Satisfied Or Refunded",
        description: "30 Days Money Back",
        aosDelay: "200",

    },
    {
        id:3,
        icon: <FaWallet className="text-4xl ms-text-5xl text-primary"/>,
        title: "Secure Payment",
        description: "Encrypted Transactions",
        aosDelay: "400",

    },
    {
        id:4,
        icon: <FaHeadphonesAlt className="text-4xl ms-text-5xl text-primary"/>,
        title: "Online Support 24/7",
        description: "Technical Support At Any Moment",
        aosDelay: "600",

    },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
            {ServiceData.map((data) => (
            <div
            data-aos="slide-left"
            data-aos-delay={data.aosDelay}
            key={data.id} className="hover:scale-105 duration-500 flex flex-col items-start
            sm:flex-row gap-4">
              {data.icon}
              <div >
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Services
