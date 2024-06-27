"use client";
import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import EsPorFra from './ES-POR-FRA/EsPorFra';
import HolPolSuiIta from './HOL-POL-SUI-ITA/HolPolSuiIta';
import IngEsc from './ING-ESC/IngEsc';
import GreTurRum from './GRE-TUR-RUM/GreTurRum';
import NorFinRus from './NOR-FIN-RUS/NorFinRus';
import LaLvNyc from './LA-LV-NYC/LaLvNyc';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Hero />
      <section id="viajes">
        <EsPorFra />
      </section>
      <section id="es-por-fr">
        <EsPorFra />
      </section>
      <section id="hol-pol-sui-ita">
        <HolPolSuiIta />
      </section>
      <section id="ing-esc">
        <IngEsc />
      </section>
      <section id="gre-tur-rum">
        <GreTurRum />
      </section>
      <section id="nor-fin-rus">
        <NorFinRus />
      </section>
      <section id="la-lv-nyc">
        <LaLvNyc />
      </section>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-4
            right-4
            md:right-6
            lg:right-8
            bg-[#009A8E]
            text-white
            border-none
            rounded-full
            w-10
            h-10
            flex
            items-center
            justify-center
            cursor-pointer
            shadow-md
            transition-colors
            duration-200
            hover:text-blue-300
            z-50
            w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12
          "
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
