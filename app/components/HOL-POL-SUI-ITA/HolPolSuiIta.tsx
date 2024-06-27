import React from 'react';
import Place from './Place';
import { FaArrowRight } from 'react-icons/fa';

const HolPolSuiIta = () => {
  return (
    <div className='pt-[5rem] pb-[4rem] px-[-1rem] sm:px-[2rem] md:px-[3rem] border-b-2 border-white border-opacity-10 relative'>
      <h1 className='heading'>HOLANDA - POLONIA - SUIZA - ITALIA</h1>

      <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
      <div className='relative flex '>
          <Place 
            country='Holanda' 
            city='Amsterdam' 
            days='3 días' 
            time='3hrs 20mins TREN a Leverkusen'  
            image='/images/n12.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>
        
        <div className='relative flex '>
          <Place 
            country='Alemania' 
            city='Leverkusen' 
            days='1 día' 
            time='1hr 30mins TREN a Frankfurt'  
            image='/images/n13.webp' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex '>
          <Place 
            country='Alemania' 
            city='Frankfurt' 
            days='2 días' 
            time='4hrs 42mins TREN a Berlin'  
            time2='1hr 20mins AVION a Berlin' 
            image='/images/n14.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Alemania' 
            city='Berlin' 
            days='3 días' 
            time2='1hr AVION a Polonia'  
            image='/images/n15.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Polonia' 
            city='Cracovia' 
            days='2 días' 
            time2='1hr 20mins AVION a Munich'  
            image='/images/n16.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex '>
          <Place 
            country='Polonia' 
            city='Munich' 
            days='3 días' 
            time='5hrs 40mins TREN a Suiza'
            time2='50mins AVION a Suiza'  
            image='/images/n17.jpeg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>


        <div className='relative flex '>
          <Place 
            country='Suiza' 
            city='Zurich' 
            days='2 días' 
            time='3hrs 15mins TREN a Zermatt'  
            image='/images/n18.jpeg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>


        <div className='relative flex'>
          <Place 
            country='Suiza' 
            city='Zermatt' 
            days='1 día' 
            time='3hrs 27mins TREN a Italia'  
            image='/images/n19.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Italia' 
            city='Milan' 
            days='3 días' 
            time='3hrs 30mins TREN a Venecia'  
            image='/images/n20.jpeg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Italia' 
            city='Venecia' 
            days='2 días' 
            time='3hrs 30mins TREN a Roma'  
            time2='1hr AVION a Roma'
            image='/images/n21.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Italia' 
            city='Roma' 
            days='5 días' 
            time='1hr 8mins TREN a Napoles'  
            image='/images/n22.webp' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Italia' 
            city='Napoles' 
            days='2 días' 
            time='10hrs TREN a Palermo'  
            time2='2hrs 30mins AVION a Palermo'
            image='/images/n23.jpg' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>

        <div className='relative flex'>
          <Place 
            country='Italia' 
            city='Palermo' 
            days='2 días'  
            image='/images/n24.webp' 
          />
          <FaArrowRight className='absolute right-[1rem] top-[50%] transform -translate-y-1/2 text-[#009A8E] text-[24px] group-hover:opacity-0' style={{ marginTop: '-12px' }} />
        </div>


      </div>
    </div>
  );
}

export default HolPolSuiIta;
