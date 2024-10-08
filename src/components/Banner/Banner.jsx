import React from 'react'
import Button from '../Shared/Button'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl ${data.bgColor} relative`}>
            {/* first col */}
<div className='p-6 sm:p-8'>
    <p className='text-sm'>{data.discount}</p>
    <h2 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h2>
    <p className='text-sm'>{data.date}</p>
</div>
        {/* second col */}
        <div className='h-full flex items-center'>
            <img src={data.image} alt={data.title} className='scale-125 md:scale-150 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover' />
        </div>
        {/* third col */}
        <div className='p-6 sm:p-8 flex flex-col justify-center gap-4'>
            <p className='text-bold text-xl'>{data.title2}</p>
            <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
            <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
            <div>
                <Button text='Shop Now' bgColor={"bg-white"} textColor={data.textColor}/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
