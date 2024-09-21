import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
import Img6 from '../../assets/product/p-6.jpg'
import Img7 from '../../assets/product/p-7.jpg'
import ProductCard from './ProductCard'


const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"Boat Headphones",
        price:"$ 120",
        asoDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"$ 420",
        asoDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Boat Headphones",
        price:"$ 120",
        asoDelay:"400",
    },
    {
        id:4,
        img:Img4,
        title:"Boat Headphones",
        price:"$ 120",
        asoDelay:"600",
    },
    {
        id:5,
        img:Img5,
        title:"Boat Headphones",
        price:"$ 120",
        asoDelay:"800",
    },
    {
        id:6,
        img:Img6,
        title:"Boat Headphones",
        price:"$ 120",
        asoDelay:"1000",
    },
    {
        id:7,
        img:Img7,
        title:"Boat Headphones",
        price:"$ 120",
        asoDelay:"1200",
    },
    
]

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* header section  */}
        <Heading title='Our Products' subtitle='Explore Our Products'/>

        {/* body section  */}
       <div className="mb-10">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
            {ProductsData.map((data)=>(
                <ProductCard data={data} key={data.id}/>
            ))}
            </div>
       </div>
      </div>
    </div>
  )
}

export default Products
