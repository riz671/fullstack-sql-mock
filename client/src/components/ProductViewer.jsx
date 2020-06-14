import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let { item_image, item, min_cost, curr_bid, ends_in } = this.props.productBeingViewed;

    return (
      <div className='product-viewer'>
        <h1>PRODUCT BEING VIEWED: </h1>
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
        <br />
      </div>
    )
  }
}