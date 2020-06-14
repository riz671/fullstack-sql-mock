import React from 'react';

const Products = (props) => {
  // destructure for ease of use
  let { id, item_image, item, min_cost, curr_bid, ends_in } = props.product;

  return (
    <div className='product-list-entry' onClick={() => props.fetchOneItemOnClick(id)}>
      <img src={item_image} alt="" />
      <br />
      <label>Item Name: {item}</label>
      <br />
      <label>Minimum Cost: ${min_cost}</label>
      <br />
      <label>Current Bid: ${curr_bid}</label>
      <br />
      <label>Bid Closes In: {ends_in} hours</label>
      <br />
    </div>
  )
}

export default Products