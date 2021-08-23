import React, { useState } from 'react';
import { Product } from '../../product/types';
import Image from 'next/image'

interface ShoppingCartItem {
  product:Product
  quantity: number
}

interface ShoppingCartItemProps {
  item:ShoppingCartItem
  changeQuantity: (type:String , product:ShoppingCartItem)=>void
}

const ShoppingCartElement: React.FC<ShoppingCartItemProps> = ({item, changeQuantity}) => {
  const [selected, setSelected] = useState('')
  let {product, quantity} = item
  const [counter, setCounter] = useState(quantity)
  return (
    <div
    className='border border-white w-80 h-32 md:h-64 md:w-47.5 mx-8 my-6 flex'
    >
      <div className=' w-24 h-24 md:h-56 md:w-52 bg-gradient-to-b from-black via-black to-gradient-black-0 my-5 mx-4'> 
        <Image alt={product.name} src={product.image} width={226} height={218}/>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <p className=' text-sm md:text-4xl uppercase font-bold py-2'>{product.name}</p>
          <p className=' text-xs md:text-2xl font-bold text-gray-400'>{product.description}</p>
        </div>
        <div className=' flex-col md:flex justify-between md:mt-4'>
          <div>
            <div className='flex items-center text-xs md:text-2xl font-bold my-1'>
              <p>QUANTITY:</p>
              <div className='border border-white flex rounded-full w-8 md:w-20 md:text-2xl justify-around font-bold md:px-2 md:mx-3 mx-2'>
                <p onClick={()=>{
                  changeQuantity('remove', item)
                  setCounter(quantity-=1)  
                }}>-</p>
                {counter}
                <p onClick={()=>{
                  changeQuantity('add', item)
                  setCounter(quantity+=1)  
                }}
                >+</p>
              </div>
            </div>
            <div className='flex items-center text-xs md:text-2xl font-bold'>
              <p className='pt-1 mr-1'>SIZE: </p>
              {product.options[0].values.map((e,i)=>
                <div
                  className={`px-1 pt-1 md:px-2 ${(selected===e)?'border border-white rounded-full':''}`}
                  key={i}
                  onClick={()=>setSelected(e)}
                >
                  {e}
                </div>
              )}
            </div>
          </div>
          <p className=' md:mt-6 md:ml-40 md:text-4xl'>${quantity*product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartElement;