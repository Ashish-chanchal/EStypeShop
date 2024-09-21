import React from 'react'
import { 
    FaCarSide,
    FaHeadphones,
    FaWallet,
    FaCheckCircle
 } from 'react-icons/fa'

const ServicesData = [
    {
        id:1,
        icon:<FaCarSide className='text-4xl md:text-5xl text-primary'/>,
        title:'Free Shipping',
        description:'Free shipping on all order'
    },
    {
        id:2,
        icon:<FaHeadphones className='text-4xl md:text-5xl  text-primary'/>,
        title:'Safe Money',
        description:'30 Days money back guarantee'
    },
    {
        id:3,
        icon:<FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title:'Secure Payment',
        description:'All Payments are Secured'
    },
    {
        id:4,
        icon:<FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
        title:'Online Support 24/7',
        description:'Technical Support 24/7'
    }
]


const Services = () => {
  return (
    <div className=''>
        <div className='container my-14 md:my-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
{ServicesData.map((item)=>(
    <div className='flex flex-col items-start sm:flex-row gap-4'>
        {item.icon}
       <div >
       <h2 className='lg:text-xl font-bold'>{item.title}</h2>
       <p className='text-gray-400 text-sm'>{item.description}</p>
       </div>
    </div>
))}
            </div>
        </div>
      
    </div>
  )
}

export default Services
