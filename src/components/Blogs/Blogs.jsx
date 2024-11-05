import React from 'react'
import Heading from '../Shared/Heading'


import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
    {
        id:1,
        title: "How to choose the perfect smartwatch",
        subtitle: "description description description bla bla bla",
        published: "Jan 20, 2024 By 3ezdinne",
        image: Img1,
    },
    {
        id:2,
        title: "How to choose the perfect gadget",
        subtitle: "description description description bla bla bla",
        published: "Jan 28, 2024 By Alonzo",
        image: Img2,
    },
    {
        id:3,
        title: "How to choose the perfect VR headset",
        subtitle: "description description description bla bla bla",
        published: "Jan 30, 2024 By Jidane",
        image: Img3,
    },
]

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
      <Heading title="Recent News" subtitle="Explore Blogs"/>

      {/* Blog Section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-3 gap-6 gap-y-8 sm-gap-4 md:gap-7">

        {/* Bloc Card  */}
        {
            BlogData.map((data) => (
                <div className="bg-white dark:bg-gray-900" key={data.id}>
                    {/* Image section  */}
                    <div className="overflow-hidden rounded-2xl
                    mb-2">
                        <img src={data.image} alt="" 
                        className="w-full h-[220px] object-cover
                        rounded-2xl hover:scale-105 duration-500"/>
                    </div>

                    {/* content section  */}
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500">{data.published}</p>
                        <p className="font-bold line-clamp-1">{data.title}</p>
                        <p className="line-clamp-2 text-sm text-gray-600
                        dark:text-gray-400">{data.subtitle}</p>
                    </div>
                </div>
            ))
        }

      </div>
      </div>
    </div>
  )
}

export default Blogs
