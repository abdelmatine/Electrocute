import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]


const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
            <a href="#"
                    className="text-primary font-semibold
                    tracking-widest text-2xl uppercase sm:text-3xl">
                        Electrocute
                    </a>
                    <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                        Lorem capsule taw takhrali fih
                    </p>
                    <p className="text-gray-500 mt-4">
                        Made in china wala chnowa
                    </p>
                    <a
                    href="https://github.com/abdelmatine"
                    target="_blank"
                    className="inline-block bg-primary/90 text-white
                    py-2 px-4 mt-4 text-sm rounded-full hover:scale-105 duration-500"
                    >
                        Visit Our Github Page
                    </a>
            </div>

            {/* Footer link  */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3
            md:pl-10">
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3">
                        Important Links
                    </h1>
                    <ul className="space-y-3">
                        {FooterLinks.map((data, index) => (
                            <li key={index}>
                                <a 
                                href={data.link} 
                                className="
                                dark:text-gray-400
                                text-gray-600 hover:text-black
                                hover:dark:text-white duration-300">
                                    {data.title}
                                </a>
                            </li>
                        ))
                        }
                    </ul>
                </div>

                        {/* Second Links  */}

                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3">
                        Quick Links
                    </h1>
                    <ul className="space-y-3">
                        {FooterLinks.map((data, index) => (
                            <li key={index}>
                                <a 
                                href={data.link} 
                                className="
                                dark:text-gray-400
                                text-gray-600 hover:text-black
                                hover:dark:text-white duration-300">
                                    {data.title}
                                </a>
                            </li>
                        ))
                        }
                    </ul>
                </div>


            {/* Company address */}
                <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                        Address Line
                    </h1>
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Boumhal, Ben Arous, TUNISIA</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <FaMobileAlt/>
                            <p>+216 56757140</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="
                                text-3xl hover:text-primary
                                hover:scale-125 duration-500"/>
                            </a>
                            <a href="#">
                                <FaFacebookF className="
                                text-3xl hover:text-primary hover:scale-125 duration-500"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="
                                text-3xl hover:text-primary hover:scale-125 duration-500"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
