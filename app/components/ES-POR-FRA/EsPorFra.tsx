import React from 'react';
import Place from './Place';
import { FaArrowDown } from 'react-icons/fa';

const EsPorFra = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] px-[-1rem] sm:px-[2rem] md:px-[3rem] border-b-2 border-white border-opacity-10 relative'>
      <h1 className='heading'>ESPAÑA - PORTUGAL - FRANCIA</h1>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='España' 
            city='Madrid' 
            days='4 dias' 
            time='4hrs 28mins TREN a Bilbao'  
            time2='1hr 5mins AVION a Bilbao' 
            image='/images/n1.jpg' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='España' 
            city='Bilbao' 
            days='2 dias' 
            time='6hrs 30mins TREN a Barcelona'  
            time2='1hr 15mins AVION a Barcelona' 
            image='/images/n2.webp' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='España' 
            city='Barcelona' 
            days='5 dias' 
            time='8hrs FERRY a Ibiza'  
            time2='1hr 10mins AVION a Ibiza' 
            image='/images/n3.webp' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='España' 
            city='Ibiza' 
            days='2 dias' 
            time='5hrs 15mins FERRY a Valencia'  
            time2='50mins AVION a Valencia' 
            image='/images/n4.jpg' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='España' 
            city='Valencia' 
            days='2 dias' 
            time2='3hr 5mins AVION a Vigo' 
            image='/images/n5.webp' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='España' 
            city='Vigo' 
            days='2 dias' 
            time='2hrs 20mins TREN a Portugal'  
            image='/images/n6.jpg' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='Portugal' 
            city='Oporto' 
            days='1 dia' 
            time='2hrs 44mins TREN a Lisboa'  
            time2='1hr AVION a Lisboa' 
            image='/images/n7.jpeg' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='Portugal' 
            city='Lisboa' 
            days='1 dia' 
            time2='2hrs 25mins AVION a Francia' 
            image='/images/n8.webp' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='Francia' 
            city='Niza' 
            days='1 dia (mismo dia que Monaco)' 
            time='30mins TREN a Monaco - 5hrs 40mins a Paris'  
            time2='1hr 40mins AVION a Paris' 
            image='/images/n9.jpg' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='Francia' 
            city='Monaco' 
            days='1 dia (mismo dia que Niza)' 
            time='30mins TREN a Niza'  
            image='/images/n10.jpg' 
          />
          <FaArrowDown className='absolute right-[50%] transform translate-y-1/2 text-[#009A8E] text-[24px]' style={{ bottom: '-1.5rem' }} />
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-[3rem]'>
        <div className='relative'>
          <Place 
            country='Francia' 
            city='Paris' 
            days='8 dias' 
            image='/images/n11.jpg' 
          />
        </div>
      </div>
    </div>
  )
}

export default EsPorFra;
