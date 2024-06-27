import Image from 'next/image';
import React from 'react';

const LaLvNyc = () => {
  return (
    <div className='pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b-2 border-white border-opacity-10 relative text-center'>
      <h1 className='heading text-2xl md:text-4xl font-bold mb-4'>Los Angeles - Las Vegas - Nueva York</h1>
      <h2 className='heading mb-4'>Los Angeles 6 dias - 5 noches</h2>

      <div className='max-w-4xl mx-auto'>
        <h2 className='text-lg text-blue-300 font-semibold mb-2'>¿Qué hacer en LA?</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-4'>
          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n42.avif' alt='Hollywood Boulevard' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Hollywood Boulevard</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n44.jpg' alt='Observatorio Griffith' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Observatorio Griffith</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n45.jpg' alt='Letrero Hollywood' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Letrero Hollywood</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n46.jpeg' alt='Muelle Santa Monica' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Muelle Santa Monica</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n47.jpg' alt='Playa Benice' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Playa Benice</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n48.jpeg' alt='Walt Disney Concert Hall' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Walt Disney Concert Hall</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n49.jpg' alt='Partido Lakers' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Partido Lakers</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n50.jpg' alt='Echo Park Lake' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Echo Park Lake</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n51.jpg' alt='Beverly Hills' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Beverly Hills</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n52.jpg' alt='Rodeo Drive' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Rodeo Drive</span>
          </li>

          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n53.jpg' alt='The Grove' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>The Grove</span>
          </li>
          
          <li className='flex flex-col items-center'>
            <div className='mb-2'>
              <Image src='/images/n54.jpg' alt='Universal Studios y Warner Bros' className='w-20 h-20 rounded-full' height={200} width={200} />
            </div>
            <span className='text-[#009A8E]'>Universal Studios y Warner Bros</span>
            <span className='text-[#009A8E]'>10USD cada uno</span>
          </li>
        </ul>
      </div>

<div className='max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg'>
  <h2 className='text-2xl text-[#009A8E] font-semibold mb-4 border-b-2 border-blue-300 pb-2'>Precios</h2>
  <p className='text-white mb-2'>Autobuses y tren: entre 2.25USD y 3 USD</p>
  <p className='text-white mb-2'>Alquiler auto: 45USD por día</p>
  <br />
  <p className='text-white mb-2'>Hotel: 60USD por noche + impuestos</p>
  <p className='text-white mb-2'>Hotel 6 South Gate LA 61138ARS + 4891ARS = 66029ARS total por 6 días y 5 noches: 330145ARS o 336USD</p>
  <br />
  <p className='text-white mb-2'>Vuelo desde BS AS: 20hrs 2 escalas San Paulo y Dallas</p>
  <p className='text-white mb-2'>711870ARS cada uno total: 1423740ARS</p>
  <p className='text-white mb-2'>726 USD cada uno total: 1452USD</p>
</div>

<div className='max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg'>
  <h2 className='text-2xl text-[#009A8E] font-semibold mb-4 border-b-2 border-blue-300 pb-2'>Clima ideal</h2>
  <p className='text-white'>Entre marzo y mayo y septiembre y octubre</p>
</div>

<br />

<h2 className='heading mb-4 mt-8'>Las Vegas 4 dias - 3 noches</h2>

<div className='max-w-4xl mx-auto'>
  <h2 className='text-lg text-blue-300 font-semibold mb-2'>¿Qué hacer en LV?</h2>
  <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-4'>
    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n55.jpg' alt='Fountains of Bellagio' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Fountains of Bellagio</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n56.jpg' alt='Red Rock Canyon National Area' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Red Rock Canyon National Area</span>
      <span className='text-[#009A8E]'> 2hrs de viaje - 80USD</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n57.jpg' alt='Las Vegas Strip' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Las Vegas Strip downtown</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n58.jpg' alt='The Neon Museum' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>The Neon Museum - 18USD</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n59.jpg' alt='The Grand Canal Venecia Shoppes' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>The Grand Canal Venecia shoppes</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n60.jpg' alt='Las Vegas North Premium Outlet' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Las Vegas North Premium Outlet</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n61.jpg' alt='High Roller' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>High Roller - 37USD</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n62.webp' alt='Stratosphere Tower' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Stratosphere Tower - 23USD</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n63.webp' alt='Titanic The Artefact Exhibition' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Titanic The Artefact Exhibition</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n64.avif' alt='Presa Hoover' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Presa Hoover</span>
    </li>

    
    
    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n65.avif' alt='Wynn Casino' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Wynn Casino</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n66.webp' alt='Las Vegas letrero' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Las Vegas letrero</span>
    </li>
  </ul>
</div>

<div className='max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg'>
<h2 className='text-2xl text-[#009A8E] font-semibold mb-4 border-b-2 border-blue-300 pb-2'>Precios</h2>
<p className='text-white mb-2'>Transporte publico 7USD pase de un dia</p>
<br />
<p className='text-white mb-2'>Hotel: 61USD por noche + impuestos</p>
<p className='text-white mb-2'>Palace Station Hotel & Casino 60241ARS + 8061ARS = 69002ARS - total por 4 días y 3 noches: 207006ARS o 211USD</p>
<br />
<p className='text-white mb-2'>Viaje desde LA: Combi - Las Vegas Shuttles</p>
<p className='text-white mb-2'>4hrs 48mins - 49USD cada uno</p>
</div>

<div className='max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg'>
<h2 className='text-2xl text-[#009A8E] font-semibold mb-4 border-b-2 border-blue-300 pb-2'>Clima ideal</h2>
<p className='text-white'>Mucho calor en verano +50C°, septiembre temporada baja</p>
</div>


<br />

<h2 className='heading mb-4 mt-8'>Nueya York  6 dias -  7 noches</h2>

<div className='max-w-4xl mx-auto'>
  <h2 className='text-lg text-blue-300 font-semibold mb-2'>¿Qué hacer en NYC?</h2>
  <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-4'>
    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n67.jpg' alt='Times Square' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Times Square</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n68.jpg' alt='Puente de Brokklyn' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Puente de Brokklyn</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n69.jpg' alt='Central Park' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'> Central Park</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n71.jpg' alt='Top of the Rock (mirador)' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Top of the Rock mirador</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n73.jpg' alt='La Quinta avenida' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>La Quinta avenida</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n72.jpg' alt='Rockefeller Center' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Rockefeller center</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n74.jpg' alt='Empirate State' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Empirate State</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n75.jpg' alt='Harlem' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Harlem</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n76.jpg' alt='The Summit - mirador ' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>The Summit - mirador </span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n88.webp' alt='Estatua de la Libertad' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Estatua de la Libertad</span>
    </li>

    
    
    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n77.jpg' alt='Edificio Flatiron' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Edificio Flatiron</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n78.jpg' alt='11S Memorial' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>11S Memorial</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n79.jpg' alt='One World Observatory' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>One World Observatory</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n80.jpg' alt='' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Barrio Chino</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n81.jpg' alt='Queens' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Queens</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n82.jpg' alt='Hudson Yards' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Hudson Yards</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n83.jpg' alt='High Line Park' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>High Line Park</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n84.jpg' alt='Grand Central Terminal' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Grand Central Terminal</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n85.jpg' alt='Toro de Wall Street' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Toro de Wall Street</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n86.jpg' alt='7th Street Burger' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>7th Street Burger</span>
    </li>

    <li className='flex flex-col items-center'>
      <div className='mb-2'>
        <Image src='/images/n87.jpg' alt='Economy Candy' className='w-20 h-20 rounded-full' height={200} width={200} />
      </div>
      <span className='text-[#009A8E]'>Economy Candy</span>
    </li>
  </ul>
</div>

<div className='max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg'>
<h2 className='text-2xl text-[#009A8E] font-semibold mb-4 border-b-2 border-blue-300 pb-2'>Precios</h2>
<p className='text-white mb-2'>Transporte publico 2USD un solo viaje. </p>
<p className='text-white mb-2'>La MetroCard de 7 días 33 USD </p>
<br />
<p className='text-white mb-2'>Hotel: Skyview Motwl Fort Lee, Nueva Jersey</p>
<p className='text-white mb-2'>89600ARS + 13119ARS de impuestos - 524USD</p>
<br />
<p className='text-white mb-2'>Viaje desde Nueva York a Buenos Aires: 1 escala en Bogota</p>
<p className='text-white mb-2'>13hrs 5mins - 720000ARS cada uno</p>
</div>

<div className='max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg'>
<h2 className='text-2xl text-[#009A8E] font-semibold mb-4 border-b-2 border-blue-300 pb-2'>Clima ideal</h2>
<p className='text-white'>En abril a junio entre 10°C y 25°C. y entre septiembre y noviembre con 10°C y 20°C</p>
</div>


</div>
  );
};

export default LaLvNyc;
