import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_bid: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    let { id, item_image, item, min_cost, curr_bid, ends_in } = this.props.productBeingViewed;

    return (
      <div className='product-viewer'>
        <h1>PRODUCT BEING VIEWED: </h1>

        <img src={item_image} alt="" />
        <br />

        <label>Item Name: {item}</label>
        <br />

        <label>Minimum Cost: ${min_cost}</label>
        <br />

        <label>Current Bid: ${curr_bid}
          <input name='new_bid' type="text" size="6" onChange={this.handleChange} />
          <button
            onClick={() => { this.props.postBid(id, this.state.new_bid) }}
          > Bid! </button>
        </label>
        <br />

        <label>Bid Closes In: {ends_in} hours</label>
        <br />
        <br />
      </div>
    )
  }
}