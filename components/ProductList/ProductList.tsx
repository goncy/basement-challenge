import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../product/types';

interface ProductListProps {
  productList: Product[]
  handleAddToCart:any
}

const ProductList: React.FC<ProductListProps> = ({productList,handleAddToCart}) => {
  return (
    <div className='flex w-full justify-around flex-wrap'>
      {productList.map((product, i)=>
        <ProductCard
          product={product}
          key={i}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default ProductList;