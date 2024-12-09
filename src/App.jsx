import React from 'react';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "/assets/hero/headphone.png";
import smartwatch2 from "/assets/category/smartwatch2-removebg-preview.png";
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description: "Some description whatever",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hour",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  description: "Some description whatever",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      <section id="home">
      <Hero handleOrderPopup={handleOrderPopup} />
      </section>
      
      <Category />

      <Services />

      <section id="banner1">
        <Banner data={BannerData} />
      </section>

      <section id="shop">
        <Products />
      </section>
 
      <section id="banner2">
        <Banner data={BannerData2} />
      </section>

      <section id="blog">
        <Blogs />
      </section>    
      
      <section id="partners">
        <Partners />
      </section>
      
      <section id="about">
        <Footer />
      </section>    
      
      <Cart orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
  );
};

export default App;