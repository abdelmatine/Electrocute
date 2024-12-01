import React, { useState, useEffect, useCallback } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';
import DarkMode from './DarkMode';

const MENU_LINKS = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Shop", link: "shop" },
  { id: 3, name: "About", link: "about" },
  { id: 4, name: "Blogs", link: "blog" },
];

const DROPDOWN_LINKS = [
  { id: 1, name: "Trending Products", link: "banner1" },
  { id: 2, name: "Best Seller", link: "banner1" },
  { id: 3, name: "Top Rated", link: "banner2" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = useCallback(() => {
    setIsBlurred(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition duration-300 ${
        isBlurred ? 'backdrop-blur-md bg-white/70 dark:bg-gray-900/70' : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and links section */}
          <div className="flex gap-4 items-center">
            <a href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
              Electrocute
            </a>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MENU_LINKS.map((data, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={data.link}
                      smooth={true}
                      duration={500}
                      offset={-70} // Adjust this value based on your navbar height
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </ScrollLink>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DROPDOWN_LINKS.map((data, index) => (
                        <li key={index}>
                          <ScrollLink
                            to={data.link}
                            smooth={true}
                            duration={500}
                            offset={-70} // Adjust this value based on your navbar height
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          >
                            {data.name}
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
              />
            </div>
            {/* Order btn section */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                5
              </div>
            </button>
            {/* dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
