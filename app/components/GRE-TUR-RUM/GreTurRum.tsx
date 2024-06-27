import React from 'react';
import Place from './Place';

const GreTurRum = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] sm:px-[2rem] md:px-[3rem] border-b-2 border-white border-opacity-10 relative'>
      <h1 className='heading'>GRECIA - TURQUIA - RUMANIA</h1>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 gap-y-4'>
          <Place 
            country='Grecia' 
            city='Atenas' 
            days='4 dias' 
            time='5hrs 54mins FERRY a Mikonos'  
            image='/images/n31.avif' 
          />
          <Place 
            country='Grecia' 
            city='Mikonos' 
            days='3 dias' 
            time2='4hrs 30mins AVION a Turquia (desde Atenas)'  
            image='/images/n32.jpg' 
          />
          <Place 
            country='Turquía' 
            city='Ankara' 
            days='3 dias' 
            time='4hrs BUS a Capadocia'  
            image='/images/n33.webp' 
          />
          <Place 
            country='Turquía' 
            city='Capacodia' 
            days='1 dia' 
            time='11hrs BUS a Pamukkale'
            image='/images/n34.jpg' 
          />
          <Place 
            country='Turquía' 
            city='Pamukkale' 
            days='1 dia' 
            time='13hrs 45mins TREN a Estambul'
            time2='11hrs BUS a Estambul'
            image='/images/n35.jpg' 
          />
          <Place 
            country='Turquía' 
            city='Estambul' 
            days='3 dias' 
            time2='1hr 20mins AVION a Rumania'
            image='/images/n36.webp' 
          />
          <Place 
            country='Rumania' 
            city='Budapest' 
            days='2 dias' 
            time='4hrs 45mins TREN a Bran'
            image='/images/n37.jpg' 
          />
          <Place 
            country='Rumanía' 
            city='Bran' 
            days='2 dias' 
            image='/images/n38.jpg' 
          />
        </div>
      </div>
    </div>
  );
}

export default GreTurRum;
