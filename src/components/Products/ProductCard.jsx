import React from 'react'
import Button from '../Shared/Button'

const ProductCard = ({data}) => {
  return (
    <div className=' group '>
        <div className=''>
      <div className='relative'>
        <img src={data.img} alt={data.title} className='
        h-[180px] w-[260px] object-cover rounded-md'/>
        <div className='hidden md:group-hover:block duration-200 absolute top-0 w-full h-full backdrop-blur rounded-md'>
   <div className='flex justify-center items-center pt-[20%]'>
   <Button text='Add to Cart' bgColor='bg-primary' textColor='text-white'/>
   </div>
   </div>
      </div>
      <div className='leadibg-7'>
        <h2 className='font-semibold'>{data.title}</h2>
        <h2 className='font-bold'>{data.price}</h2>
      </div>

    </div>
    <div className='flex justify-center items-center md:hidden'>
   <Button text='Add to Cart' bgColor='bg-primary' textColor='text-white'/>
   </div>
    </div>
  )
}

export default ProductCard
