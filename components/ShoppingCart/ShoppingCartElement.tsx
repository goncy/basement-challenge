import React, { useState } from 'react';
import { Product } from '../../product/types';
import Image from 'next/image'

interface ShoppingCartItem {
  product:Product,
  quantity: number
}

const ShoppingCartElement: React.FC<ShoppingCartItem> = ({product,quantity}) => {
  const [selected, setSelected] = useState('')

  return (
    <div
    className='border border-white h-64 w-47.5 mx-8 my-6 flex'
    >
      <div className='bg-gradient-to-b from-black via-black to-gradient-black-0 my-5 mx-4'> 
        <Image alt={product.name} src={product.image} width={226} height={218}/>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <p className=' text-4xl uppercase font-bold py-2'>{product.name}</p>
          <p className=' text-2xl font-bold text-gray-400'>{product.description}</p>
        </div>
        <div className='flex justify-between mt-4'>
          <div>
            <div className='flex text-2xl font-bold my-1'>
              <p>QUANTITY:</p>
              <div className='border border-white flex rounded-full w-20 text-2xl justify-around font-bold px-2 mx-3'>
                <p onClick={()=>quantity--}>-</p>
                {quantity}
                <p onClick={()=>quantity++}>+</p>
              </div>
            </div>
            <div className='flex text-2xl font-bold'>
              <p >SIZE: </p>
              {product.options[0].values.map((e,i)=>
                <div
                  className={` px-2 ${(selected===e)?'border border-white rounded-full':''}`}
                  key={i}
                  onClick={()=>setSelected(e)}
                >
                  {e}
                </div>
              )}
            </div>
          </div>
          <p className=' mt-6 ml-40 text-4xl'>${quantity*product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartElement;