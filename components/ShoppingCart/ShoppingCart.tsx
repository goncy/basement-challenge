import React from 'react';
import { Product } from '../../product/types'
import Image from 'next/image';
import ShoppingCartElement from './ShoppingCartElement';

import yourCart from '../../public/yourCart.svg'
import checkout from '../../public/checkout.svg'
import products from '../../pages/api/products';

interface ShoppingCartItem {
  product:Product,
  quantity: number
}

interface ShoppingCartProps {
  shoppingCart:ShoppingCartItem[],
  show: boolean
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({shoppingCart, show}) => {
  const newShoppingCart = shoppingCart.map(product=>({product, quantity:1})) 
  console.log(newShoppingCart)
  return (
    show ? 
    <div className='w-screen h-screen bg-black bg-opacity-70 absolute z-10 flex justify-end'>
      <div className='bg-black w-51.5 border-b border-l border-white flex  flex-col justify-between'>
        <p className='self-end py-10 px-10 font-bold text-2xl'>CLOSE</p>
          <Image alt='Your Cart' src={yourCart} width={760} height={89.47} />
        <div className='py-11 h-4/6 overflow-y-scroll'>
          {newShoppingCart.map((product,i)=>
            <ShoppingCartElement 
              product={product.product}
              quantity={product.quantity}
              key={i}
            />
          )}
        </div>
        <div className='flex justify-between text-4xl border-t border-white h-24'>
          <p className='py-6 px-8'>TOTAL: $32</p>
          <div className='border-l border-white w-72 py-6 px-8'>
            <Image alt='Checkout' src={checkout} width={235} height={42}/>
          </div>
        </div>
      </div>
    </div>
    :
    null
  );
}

export default ShoppingCart;