import React from 'react'
import Heading from '../Shared/Heading'
import BlogCard from './BlogCard'
import img1 from '../../assets/blogs/blog-1.jpg'
import img2 from '../../assets/blogs/blog-2.jpg'
import img3 from '../../assets/blogs/blog-3.jpg'


const BlogData=[
    {
        id:1,
        title:"How to choose perfect smartwatch",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
        date:"10 Jan 2021",
        image:img1
    },
    {
        id:2,
        title:"How to choose perfect gadget",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
        date:"10 Jan 2021",
        image:img2
    },
    {
        id:3,
        title:"How to choose perfect VR headset",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
        date:"10 Jan 2021",
        image:img3   
    }


]
const Blogs = () => {
  return (
    <div className='my-12'>
    <div className="container">
      {/* header section  */}
      <Heading title='Recent News' subtitle='Explore Our Blogs'/>

      {/* body section  */}
     <div className="mb-10">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  sm:gap-4 md:gap-7  gap-y-8 place-items-center">
            {BlogData.map((data)=>(
                <BlogCard data={data} key={data.id}/>
            ))}
          </div>
     </div>
    </div>
  </div>
  )
}

export default Blogs
