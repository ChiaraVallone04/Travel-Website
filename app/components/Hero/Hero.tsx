import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className='absolute inset-0 bg-black opacity-85 flex items-center justify-center'>
        <div className='z-10 text-center'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-0 lg:mb-1'>
            Lista de Viaje
          </h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#009A8E] my-4 sm:my-6 md:my-8 lg:my-10 mx-4 sm:mx-auto max-w-screen-md font-bold'>En esta pagina podrás explorar el viaje de ensueño de dos personas, ansiosas por descubrir cualquier destino que se les presente!</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
