import React from 'react'
import { motion } from 'framer-motion'
import Button from '../Shared/Button'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 overflow-hidden'>
      <div className='container'>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl ${data.bgColor} relative`}>
            {/* first col */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='p-6 sm:p-8'
            >
                <p className='text-sm'>{data.discount}</p>
                <h2 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h2>
                <p className='text-sm'>{data.date}</p>
            </motion.div>
            {/* second col */}
            <div className='h-full flex items-center justify-center p-6 md:p-0'>
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src={data.image} alt={data.title} 
                  className='scale-125 md:scale-150 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-contain' 
                />
            </div>
            {/* third col */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='p-6 sm:p-8 flex flex-col justify-center gap-4'
            >
                <p className='text-bold text-xl'>{data.title2}</p>
                <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
                <div>
                    <Button text='Shop Now' bgColor={"bg-white"} textColor={data.textColor}/>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner
