import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../product/types';

interface ProductListProps {
  productList: Product[]
}

const ProductList: React.FC<ProductListProps> = ({productList}) => {
  return (
    <div className='w-full flex justify-around'>
      {productList.map((product, i)=>
        <ProductCard
          product={product}
          key={i}
        />
      )}
    </div>
  );
}

export default ProductList;