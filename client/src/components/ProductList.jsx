import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  // iterate through products array that was passed
  return (
    <div className='product-list'>
      {props.allProducts.map((product, index) => {
        return (<Products product={product} key={index} />)
      })}
    </div>
  )
}

export default ProductList