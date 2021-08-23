import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg'
import hd from '../../public/hd.svg'
import icon from '../../public/icon.svg'

interface NavbarProps {
  toggleShoppingCart:any
}

const Navbar: React.FC<NavbarProps> = ({toggleShoppingCart}) => {
  return (
    <nav className='w-full flex justify-between items-center py-12 px-8'>
      <div className='hidden xs:block'>
        <Image alt='Basement' src={logo} height={28} width={192}/>      
      </div>
      <div className='xs:hidden'>
        <Image alt='Basement' src={icon}/>      
      </div>
      <div className='hidden md:block'>
        <Image alt='HD' src={hd} height={24} width={284}/> 
      </div>
      <div 
        onClick={toggleShoppingCart}
        className="cursor-pointer hover:bg-white hover:text-black font-bold py-3.5 px-8 border-2 rounded-full border-white hover:border-transparent ">
        <span>CART (0)</span>
      </div>
    </nav>
  );
}

export default Navbar;