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
    this.displaySearchedItem = this.displaySearchedItem.bind(this);
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

  // fetches one item to prodcut viewer
  fetchOneItemOnClick(id) {
    axios.get(`/name/${id}`)
      .then(response => {
        this.setState({ productBeingViewed: response.data[0] })
      })
      .catch(err => console.log(err));
  }

  // post new bid to id
  // then render list and viewed product
  postBid(id, bid) {
    axios.put(`/name/${id}`, { curr_bid: bid })
      .then(() => {
        this.fetchAllProducts();
        this.fetchOneItemOnClick(id)
      })
  }

  // display search item with itemname matching db exactly
  displaySearchedItem(itemName) {
    axios.get(`./name/${itemName}`)
      .then(response => {
        this.setState({ productBeingViewed: response.data[0] })
      })
      .catch(err => console.log(err))
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
            <Search
              displaySearchedItem={this.displaySearchedItem}
            />
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