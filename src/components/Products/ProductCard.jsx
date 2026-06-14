import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Shared/Button'

const ProductCard = ({data}) => {
  return (
    <Link to={`/product/${data.id}`} className='group block'>
      <div>
        <div className='relative'>
          <img src={data.img} alt={data.title} className='h-[180px] w-[260px] object-cover rounded-md'/>
          <div className='hidden md:group-hover:block duration-200 absolute top-0 w-full h-full backdrop-blur rounded-md'>
            <div className='flex justify-center items-center pt-[20%]'>
              <span className="bg-primary text-white w-fit cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 text-sm font-semibold">View Details</span>
            </div>
          </div>
        </div>
        <div className='mt-2 leading-7 text-left'>
          <h2 className='font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors'>{data.title}</h2>
          <h2 className='font-bold text-gray-900 dark:text-gray-200'>{data.price}</h2>
        </div>
      </div>
      <div className='flex justify-center items-center md:hidden mt-2'>
        <span className="bg-primary text-white w-fit cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 text-sm font-semibold">View Details</span>
      </div>
    </Link>
  )
}

export default ProductCard
