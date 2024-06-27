import React from 'react';
import Place from './Place';
import { FaArrowRight } from 'react-icons/fa';

const IngEsc = () => {
  return (
    <div className='pt-[5rem] pb-[4rem] px-[3rem] sm:px-[4rem] lg:px-[12rem] border-b-2 border-white border-opacity-10 relative'>
      <h1 className='heading'>INGLATERRA - ESCOCIA</h1>

      <div className='max-w-7xl mx-auto mt-[3rem] grid grid-cols-1 sm:grid-cols-2 gap-[2rem]'>
        <div className='flex justify-center'>
          <Place
            country='Inglaterra'
            city='Londres'
            days='12 días'
            time='2hrs 30mins TREN a Liverpool'
            image='/images/n25.webp'
          />
        </div>
        <div className='flex justify-center'>
          <Place
            country='Inglaterra'
            city='Estadio Emirates Arsenal'
            days='Día Gunner'
            time=''
            image='/images/n26.jpg'
          />
        </div>
        <div className='flex justify-center'>
          <Place
            country='Inglaterra'
            city='Liverpool'
            days='3 días'
            time='51mins TREN a Manchester'
            image='/images/n27.jpg'
          />
        </div>
        <div className='flex justify-center'>
          <Place
            country='Inglaterra'
            city='Manchester'
            days='3 días'
            time='3hrs 30mins TREN a Escocia'
            image='/images/n28.webp'
          />
        </div>
        <div className='flex justify-center'>
          <Place
            country='Escocia'
            city='Glasgow'
            days='3 días'
            time='50mins TREN a Escocia'
            image='/images/n29.jpg'
          />
        </div>
        <div className='flex justify-center'>
          <Place
            country='Escocia'
            city='Edimburgo'
            days='2 días'
            image='/images/n30.webp'
          />
        </div>
      </div>
    </div>
  );
};

export default IngEsc;
