import React from 'react';
import Image from 'next/image';
import { FaTrainSubway } from 'react-icons/fa6';

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
    <div className='bg-[#1f1d1d] rounded-lg overflow-hidden mb-5 w-full px-[-100px]'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className='sm:w-[280px] mb-4 sm:mb-0'>
          <Image src={image} alt={city} width={300} height={300} className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col justify-between text-center sm:text-left px-4 py-2 flex-1'>
          <div className='flex items-center justify-center sm:justify-start space-x-4 mb-2 sm:mb-0'>
            <h1 className='px-4 py-1 mb-2 bg-blue-800 text-[10px] sm:text-[12px] md:text-[14px] text-white rounded-full'>{country}</h1>
            <p className='text-[#009A8E] text-[10px] sm:text-[12px] md:text-[14px] font-semibold'>{days}</p>
          </div>
          <h1 className='text-[14px] sm:text-[16px] md:text-[20px] font-semibold hover:text-[#009A8E] hover:underline cursor-pointer transition-all duration-300 text-white uppercase'>{city}</h1>
          <div className='mt-2 flex justify-end'>
            <div className='ml-auto flex items-center'>
              {time && (
                <div className='flex items-center space-x-2'>
                  <FaTrainSubway className='text-[#009A8E] w-4 h-4 text-opacity-70' />
                  <span className='text-white text-[12px] sm:text-[14px] md:text-[17px] font-semibold text-opacity-30'>{time}</span>
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
