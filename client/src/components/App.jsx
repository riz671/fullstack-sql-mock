import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productBeingViewed: '',
      allProducts: []
    }

    this.fetchAllProducts = this.fetchAllProducts.bind(this);
    this.fetchOneItemOnClick = this.fetchOneItemOnClick.bind(this);
    this.postBid = this.postBid.bind(this);
  }

  // gets all product from db
  // changes state of allProducts
  fetchAllProducts() {
    axios.get('/products')
      .then(response => {
        this.setState({
          allProducts: response.data
        })
      })
      .catch(err => console.log(err));
  }

  fetchOneItemOnClick(id) {
    axios.get(`/name/${id}`)
      .then(response => {
        this.setState({ productBeingViewed: response.data[0] })
      })
      .catch(err => console.log(err));
  }

  postBid(id, bid) {
    axios.put(`/name/${id}`, { curr_bid: bid })
      .then(() => {
        this.fetchAllProducts();
        // see if id only works as well
        this.fetchOneItemOnClick(id)
      })
  }

  componentDidMount() {
    this.fetchAllProducts();
  }

  render() {

    return (
      <div>

        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>

        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>

        <div className="row main-container">

          <div className="col-md-7 product-viewer-container">
            <ProductViewer
              productBeingViewed={this.state.productBeingViewed}
              postBid={this.postBid}
            />
          </div>

          <div className="col-md-5 product-list-container">
            <ProductList
              allProducts={this.state.allProducts}
              fetchOneItemOnClick={this.fetchOneItemOnClick}
            />
          </div>

        </div>
      </div>
    )
  }
}