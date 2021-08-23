import React, { useEffect, useState } from 'react';
import { Product } from '../../product/types'
import Image from 'next/image';
import ShoppingCartElement from './ShoppingCartElement';

import yourCart from '../../public/yourCart.svg'
import checkout from '../../public/checkout.svg'
import cartMobile from '../../public/cartMobile.svg'

import {ShoppingCartItem} from '../../types/shoppingCartTypes'

interface ShoppingCartProps {
  shoppingCart:ShoppingCartItem[]
  show: boolean
  setShoppingCart : React.Dispatch<React.SetStateAction<ShoppingCartItem[]>>
  toggleShoppingCart:any
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({shoppingCart, show, toggleShoppingCart, setShoppingCart}) => {
  const [total, setTotal] = useState<number>()

  const changeQuantity = (type:String , product:ShoppingCartItem): void => {
    const newCart = [...shoppingCart]
    const index = newCart.indexOf(product)
    if (type==='add'){
      product.quantity += 1
      newCart[index] = product
      setShoppingCart(newCart)
    } else {
      if (product.quantity <= 1){
        setShoppingCart(shoppingCart.filter(p=>p.product.name != product.product.name))
      } else{
        product.quantity -= 1
        newCart[index] = product
        setShoppingCart(newCart)      }
    }
  }

  const getTotal = (cart:ShoppingCartItem[]) => {
    let newTotal : number = 0
    cart.forEach(p => {
      newTotal += (p.quantity * p.product.price)
    });
    setTotal(newTotal || 0)
  }

  const handleCheckout = () => {
    console.log('Shopping Cart: ', shoppingCart)
    console.log('Total: $', total)
  }

  useEffect(()=>{
    getTotal(shoppingCart)
  },[shoppingCart])


  return (
    show ? 
    <div className='w-screen h-screen bg-black bg-opacity-70 absolute z-10 flex justify-end'>
      <div className=' w-screen h-screen sm:w-51.5 bg-black border-b border-l border-white flex  flex-col md:justify-between items-center'>
        <p 
          onClick={toggleShoppingCart}
          className='self-end py-4 md:py-10 px-10 font-bold text-sm md:text-2xl'>→ CLOSE</p>
          <div className='hidden sm:block'>
            <Image alt='Your Cart' src={yourCart} width={760} height={89.47} />
          </div>
          <div className='sm:hidden'>
            <Image alt='Your Cart' src={cartMobile} width={344} height={214} />
          </div>
        <div className=' py-8 h-3/6 md:py-11 md:h-4/6 overflow-y-scroll'>
          {shoppingCart.map((product,i)=>
            <ShoppingCartElement 
              item={product}
              changeQuantity={changeQuantity}
              key={i}
            />
          )}
        </div>
        <div className=' text-xl self-end w-full flex items-center md:text-4xl md:border-t border-white h-24 flex-col md:flex-row'>
          <div className='md:py-6 md:px-8 md:w-4/5 flex justify-between w-11/12'>
            <p >TOTAL: </p>
            <p>${total}</p>
          </div>
          <div 
            onClick={handleCheckout}
            className=' flex justify-center md:border-l border-t w-11/12 py-2  border-white md:w-72 md:py-6 md:px-8'>
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