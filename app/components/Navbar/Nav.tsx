import React from 'react';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { FaPlaneDeparture } from 'react-icons/fa';

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className='h-[12vh] shadow-md' style={{ backgroundColor: '#009A8E' }}>
            <div className='flex items-center justify-between h-[100%] w-[90%] mx-auto relative'>
                <ul className='hidden lg:flex items-center space-x-16'>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#viajes">Viajes</Link>
                    </li>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#es-por-fr">ES-POR-FR</Link>
                    </li>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#hol-pol-sui-ita">HOL-POL-SUI-ITA</Link>
                    </li>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#ing-esc">ING-ESC</Link>
                    </li>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#gre-tur-rum">GRE-TUR-RUM</Link>
                    </li>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#nor-fin-rus">NOR-FIN-RUS</Link>
                    </li>
                    <li className='text-[18px] font-medium uppercase hover:text-blue-900 transition-all duration-200'>
                        <Link href="#la-lv-nyc">LA-LV-NYC</Link>
                    </li>
                </ul>
                <div className='flex items-center space-x-3'>
                    <BiMenu onClick={openNav} className='w-[2rem] h-[2rem] text-blue-800 lg:hidden' />
                </div>
                <div className='flex items-center ml-auto space-x-3'>
                    <FaPlaneDeparture className='text-white w-8 h-8' />
                </div>
            </div>
        </div>
    );
};

export default Nav;
