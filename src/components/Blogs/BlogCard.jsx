import React from 'react'

const BlogCard = ({data}) => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='overflow-hidden rounded-2xl ,b-2'>
        <img src={data.image} alt={data.title} className='w-full h-[220px] object-cover rounded-2xl hover:scale-125 duration-500'/>
      </div>
      <div className="space-y-2">
        <p className='text-xs text-gray-500'>{data.date}</p>
        <p className='font-bold line-clamp-1'>{data.title}</p>
        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
      </div>
    </div>
  )
}

export default BlogCard
