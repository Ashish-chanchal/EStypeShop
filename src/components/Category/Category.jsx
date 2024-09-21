import React from 'react'
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";
import Button from '../Shared/Button';
const Category = () => {
  return (
    <div className='py-8'>
      <div className=' container '>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* first div  */}
            <div className='py-10 pl-5 bg-gradient-to-r from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div >
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>EarPhones</p>
                        <Button text="Browse" bgColor="bg-primary"
                        textColor={"text-white"} />
                    </div>
                </div>
                <img src={Image1} alt="Headphones" className='w-[320px] absolute bottom-0'/>
            </div>
            {/* second div  */}
            <div className='py-10 pl-5 bg-gradient-to-r from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div >
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                        <Button text="Browse" bgColor="bg-white mt-2"
                        textColor={"text-brandYellow"} />
                    </div>
                </div>
                <img src={Image2} alt="Watch" className='w-[320px] absolute  -right-16 top-[0px]'/>
            </div>
            {/* third div  */}
            <div className='py-10 sm:col-span-2 pl-5 bg-gradient-to-r from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div >
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                        <Button text="Browse" bgColor="bg-white mt-2"
                        textColor={"text-primary"} />
                    </div>
                </div>
                <img src={Image3} alt="Watch" className='w-[320px] absolute right-0 top-[0px]'/>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* first div  */}
            <div className='py-10 sm:col-span-2 pl-5 bg-gradient-to-r from-gray-400 to-brandWhite/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div >
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gaming</p>
                        <Button text="Browse" bgColor="bg-primary"
                        textColor={"text-white"} />
                    </div>
                </div>
                <img src={Image4} alt="Headphones" className='w-[320px] absolute bottom-0 right-10'/>
            </div>
            {/* second div  */}
            <div className='py-10 pl-5 bg-gradient-to-r from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div >
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Virtual </p>
                        <Button text="Browse" bgColor="bg-white mt-2"
                        textColor={"text-brandGreen"} />
                    </div>
                </div>
                <img src={Image5} alt="Watch" className='w-[250px] absolute right-5 bottom-[0px]'/>
            </div>
            {/* third div  */}
            <div className='py-10  pl-5 bg-gradient-to-r from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div >
                    <div className='mb-4 top-10'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p>
                        <Button text="Browse" bgColor="bg-white mt-2"
                        textColor={"text-brandBlue"} />
                    </div>
                </div>
                <img src={Image6} alt="Watch" className='w-[200px] absolute right-0 bottom-0'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
