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
      className="relative flex items-center justify-center flex-col bg-cover bg-center rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 border-4 border-transparent hover:border-[#009A8E] m-2"
      style={{ 
        backgroundImage: `url(${image})`,
        width: '260px',
        height: '360px'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center p-5">
        <div className="mb-3">
          <h1 className="inline-block px-5 py-1 text-[14px] uppercase bg-[#009A8E] text-black rounded-full">{country}</h1>
        </div>
        <h2 className="text-[24px] text-white cursor-pointer hover:underline transition-all duration-500 uppercase font-extrabold">{city}</h2>
        <p className="text-white text-opacity-75 mt-2 text-[14px]">{days}</p>
        <div className="mt-4 space-y-2">
          {time && (
            <p className="text-blue-300 cursor-pointer hover:underline transition-all duration-500 text-[18px] font-bold">{time}</p>
          )}
          {time2 && (
            <p className="text-blue-300 cursor-pointer hover:underline transition-all duration-500 text-[18px] font-bold">{time2}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Place;
