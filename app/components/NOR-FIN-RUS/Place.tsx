import React from 'react';
import Image from 'next/image';
import { FaPlane, FaTrainSubway } from 'react-icons/fa6';

interface Props {
  country: string;
  city: string;
  days: string;
  time?: string;
  time2?: string;
  image: string;
}

const Place = ({ country, city, days, time, time2, image }: Props) => {
  return (
    <div className='bg-[#1f1d1d] rounded-lg overflow-hidden mb-5 w-full px-4 py-4 sm:px-6 sm:py-4'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className='sm:w-1/3 mb-4 sm:mb-0'>
          <Image src={image} alt={city} width={300} height={300} className='object-cover w-full h-full rounded-lg shadow-lg' />
        </div>
        <div className='flex flex-col justify-between text-center sm:text-left px-4 py-2 flex-1'>
          <div className='flex items-center justify-center sm:justify-start space-x-4 mb-2 sm:mb-0'>
            <h1 className='px-3 py-1 mb-2 bg-blue-800 text-xs sm:text-sm md:text-lg text-white rounded-full'>{country}</h1>
            <p className='text-[#009A8E] text-xs sm:text-sm md:text-lg font-semibold'>{days}</p>
          </div>
          <h1 className='text-lg sm:text-xl md:text-2xl font-semibold hover:text-[#009A8E] hover:underline cursor-pointer transition-all duration-300 text-white uppercase'>{city}</h1>
          <div className='mt-2 flex justify-between'>
            <div className='flex items-center'>
              {time && (
                <div className='flex items-center space-x-2'>
                  <FaTrainSubway className='text-[#009A8E] w-4 h-4 text-opacity-70' />
                  <span className='text-white text-sm sm:text-lg md:text-xl font-semibold text-opacity-30'>{time}</span>
                </div>
              )}
            </div>
            <div className='flex items-center'>
              {time2 && (
                <div className='flex items-center space-x-2'>
                  <FaPlane className='text-[#009A8E] w-4 h-4 text-opacity-70' />
                  <span className='text-white text-sm sm:text-lg md:text-xl font-semibold text-opacity-30'>{time2}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
