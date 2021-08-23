import React, { useEffect, useState } from 'react';
import { Product } from '../../product/types'
import Image from 'next/image';
import ShoppingCartElement from './ShoppingCartElement';

import yourCart from '../../public/yourCart.svg'
import checkout from '../../public/checkout.svg'
import ProductList from '../ProductList/ProductList';

interface ShoppingCartItem {
  product:Product,
  quantity: number
}

interface ShoppingCartProps {
  shoppingCart:ShoppingCartItem[]
  show: boolean
  setShoppingCart : React.Dispatch<React.SetStateAction<ShoppingCartItem[]>>
  toggleShoppingCart:any
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({shoppingCart, show, toggleShoppingCart, setShoppingCart}) => {
  const [total, setTotal] = useState()

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

  const getTotal = (cart) => {
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
      <div className='bg-black w-51.5 border-b border-l border-white flex  flex-col justify-between'>
        <p 
          onClick={toggleShoppingCart}
          className='self-end py-10 px-10 font-bold text-2xl'>CLOSE</p>
          <Image alt='Your Cart' src={yourCart} width={760} height={89.47} />
        <div className='py-11 h-4/6 overflow-y-scroll'>
          {shoppingCart.map((product,i)=>
            <ShoppingCartElement 
              item={product}
              changeQuantity={changeQuantity}
              key={i}
            />
          )}
        </div>
        <div className='flex justify-between text-4xl border-t border-white h-24'>
          <p className='py-6 px-8'>TOTAL: ${total}</p>
          <div 
            onClick={handleCheckout}
            className='border-l border-white w-72 py-6 px-8'>
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