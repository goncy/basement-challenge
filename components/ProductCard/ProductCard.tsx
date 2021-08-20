import Image from 'next/image';
import React from 'react';
import { Product } from '../../product/types';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  console.log(product)
  return (
    <div className='flex flex-col'>
      <div className='bg-gradient-to-b from-black via-black to-gradient-black-0' >
        <Image alt={product.name} src={product.image} width={435} height={577}/>
      </div>
      <div className='border-t-2 border-white flex justify-between text-xl font-bold leading-9 py-2'>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;