import React from 'react';
import { ImCross } from 'react-icons/im';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa6';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, nav }: Props) => {
    const navStyle = nav ? 'translate-x-0' : 'translate-x-[100%]';

    return (
        <div className={`fixed ${navStyle} right-0 left-0 bottom-0 top-0 transition-all duration-500 bg-[#000000e0] z-[1002]`}>
            <ImCross onClick={closeNav} className='absolute top-[2rem] w-[1.5rem] h-[1.5rem] right-[2rem] text-white' />
            <div className={`bg-[#009A8E] ${navStyle} transition-all duration-500 delay-200 flex flex-col justify-center items-center w-[70%] h-[100%]`}>
                <ul className='space-y-10'>
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
                <div className='absolute right-0 bottom-0 mb-4 mr-4'>
                    <FaPlaneDeparture className='text-white w-8 h-8' />
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
