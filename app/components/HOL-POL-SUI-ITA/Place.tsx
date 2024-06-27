import React from 'react';


type Props = {
  country: string;
  city: string;
  days: string;
  time?: string;
  time2?: string;
  image: string;
};

const Place = ({ country, city, days, time, time2, image }: Props) => {
  return (
    <div
      className={`relative flex items-start justify-end flex-col bg-cover bg-center`}
      style={{ 
        backgroundImage: `url(${image})`,
        width: '300px',  
        height: '350px' 
      }}
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#0000009f] h-[100%]'></div>
      <div className='relative z-[10] p-4 mt-auto'>
        <div className='flex items-center space-x-4 mb-2'>
          <h1 className='w-fit px-4 text-[12px] py-[2px] uppercase bg-blue-800 text-white'>{country}</h1>
          <p className='text-white text-opacity-75'>{days}</p>
        </div>
        <h1 className='text-[20px] text-white cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.2rem] hover:text-[#009A8E] font-semibold'>{city}</h1>
        <div className='mt-[0.5rem]'>
          <p className='text-[#00C2B3] cursor-pointer hover:underline transition-all duration-500 hover:text-white text-[17px] font-semibold w-fit'>{time}</p>
          <p className='text-[#00C2B3] cursor-pointer hover:underline transition-all duration-500 hover:text-white text-[17px] font-semibold w-fit'>{time2}</p>
        </div>
      </div>
    </div>
  );
}

export default Place;
