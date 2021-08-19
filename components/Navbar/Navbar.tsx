import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg'

const Navbar: React.FC = () => {
  return (
    <nav className='w-full flex justify-between py-12 px-8'>
      <Image alt='Basement' src={logo}/>

      <div className="cursor-pointer hover:bg-white hover:text-black font-bold py-3.5 px-8 border-2 rounded-full border-white hover:border-transparent ">
        <span>CART (0)</span>
      </div>
    </nav>
  );
}

export default Navbar;