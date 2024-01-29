import React from 'react';
import San1 from '../assets/santorini1.jpg';
import San2 from '../assets/santorini2.jpg';
import Zak1 from '../assets/zakhyntos1.jpg';
import Zak2 from '../assets/zakhyntos2.jpg';
import Myk1 from '../assets/mykonos2.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the most Beautiful Greek Islands</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Zak2} alt='/'/>
        <img className='w-full h-full object-cover' src={Zak1} alt='/'/>
        <img className='w-full h-full object-cover' src={San1} alt='/'/>
        <img className='w-full h-full object-cover' src={San2} alt='/'/>
        <img className='w-full h-full object-cover' src={Myk1} alt='/'/>
        </div>
    </div>
  )
}

export default Destinations
