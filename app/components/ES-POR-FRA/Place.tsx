import React from 'react';
import Image from 'next/image';
import { FaPlane } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";

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
    <div className='flex flex-col sm:flex-row items-center space-x-0 sm:space-x-7 mb-4 sm:mb-[1.5rem] bg-[#1f1d1d]'>
      <div className='sm:w-[280px] mb-4 sm:mb-0'>
        <Image src={image} alt={city} width={300} height={300} className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col justify-center text-center sm:text-left'>
        <div className='flex items-center justify-center sm:justify-start space-x-4 mb-2 sm:mb-0'>
          <h1 className='px-4 py-1 mb-2 bg-blue-800 text-[10px] sm:text-[12px] md:text-[14px] text-white'>{country}</h1>
          <p className='text-[#009A8E] text-[10px] sm:text-[12px] md:text-[14px] font-semibold'>{days}</p>
        </div>
        <h1 className='text-[14px] sm:text-[16px] md:text-[20px] font-semibold hover:text-[#009A8E] hover:underline cursor-pointer transition-all duration-300 text-white uppercase'>{city}</h1>
        <div className='mt-2 flex justify-end'>
          <div className='ml-auto flex items-center'>
            <ul className='flex items-center space-x-10'>
              {time && (
                <li className='mb-2 hover:text-white hover:underline cursor-pointer transition-all duration-300 text-white text-[12px] sm:text-[14px] md:text-[17px] font-semibold text-opacity-30'>
                  {time} <FaTrainSubway className='text-[#009A8E] w-4 h-4 ml-1 text-opacity-70'/>
                </li>
              )}
              {time2 && (
                <li className=' mb-2 hover:text-white hover:underline cursor-pointer transition-all duration-300 text-white text-[12px] sm:text-[14px] md:text-[17px] font-semibold text-opacity-30'>
                  {time2} <FaPlane className='text-[#009A8E] w-4 h-4 ml-1 text-opacity-70'/>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
