import Image from 'next/image';
import React from 'react';
import { Product } from '../../product/types';
import addToCart from '../../public/addToCart.svg'

interface ProductCardProps {
  product: Product
  handleAddToCart: (product:Product)=>void
}

const ProductCard: React.FC<ProductCardProps> = ({product, handleAddToCart}) => {
  return (
    <div 
      onClick={()=>handleAddToCart(product)}
      className='w-80 h-27.5  xs:w-27.5 xs:h-36.2 flex flex-col hover-trigger cursor-pointer mb-24'
      >
      <div className='bg-gradient-to-b from-black via-black to-gradient-black-0 relative' >
        <Image alt={product.name} src={product.image} width={435} height={577} />
        <div className='absolute bottom-5/12 left-1/4 hover-target'>
          <Image alt='Add To Cart' src={addToCart}/>
        </div>
      </div>
      <div className='border-t-2 border-white flex justify-between text-xl font-bold leading-9 py-2'>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;