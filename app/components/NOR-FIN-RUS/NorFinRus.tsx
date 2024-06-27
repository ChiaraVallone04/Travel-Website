import React from 'react';
import Place from './Place';

const NorFinRus = () => {
  return (
    <div className='pt-[5rem] pb-[4rem] px-[-100px] sm:px-6 lg:px-8 border-b-2 border-white border-opacity-10 relative'>
      <h1 className='heading'>NORUEGA - FINLANDIA - RUSIA</h1>

      <div className='w-[80%] mx-auto'>
        <div className='relative'>
          <Place 
            country='Noruega' 
            city='Oslo' 
            days='4 dias' 
            time='53mins TREN a Bergen'  
            image='/images/n39.jpg' 
          />
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className='relative'>
          <Place 
            country='Noruega' 
            city='Bergen' 
            days='2 dias' 
            time='8hrs 40mins TREN a Finlandia'  
            image='/images/n40.jpg' 
          />
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className='relative'>
          <Place 
            country='Finlandia' 
            city='Laponia' 
            days='3 dias' 
            time='18hrs 37mins BUS a Rusia'  
            image='/images/n41.jpg' 
          />
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className='relative'>
          <Place 
            country='Rusia' 
            city='San Petersburgo' 
            days='3 dias' 
            time='4hrs 3mins TREN a Moscú'  
            time2='1hr 34mins AVION a Moscú' 
            image='/images/n42.jpg' 
          />
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className='relative'>
          <Place 
            country='Rusia' 
            city='Moscú' 
            days='3 dias' 
            image='/images/n43.jpg' 
          />
        </div>
      </div>
    </div>
  )
}

export default NorFinRus;
