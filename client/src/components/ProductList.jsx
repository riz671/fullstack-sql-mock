import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  // iterate through products array that was passed
  return (
    <div className='product-list'>
      {props.allProducts.map(product => {
        return (<Products product={product} />)
      })}
    </div>
  )
}

export default ProductList