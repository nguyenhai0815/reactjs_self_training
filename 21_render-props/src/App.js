import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    searchTerm: ''
  };

  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search Products"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

class ProductList extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired
  };

  state = {
    products: []
  };

  componentDidMount() {
    // API call to fetch products
    // Set state with products data
    this.setState({
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' }
      ]
    });
  }

  render() {
    const { searchTerm } = this.props;
    const { products } = this.state;
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class ProductSearch extends Component {
  state = {
    searchTerm: ''
  };

  handleSearch = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <h1>Product Search</h1>
        <SearchBar onSearch={this.handleSearch} />
        <ProductList searchTerm={searchTerm} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ProductSearch/>
    </div>
  );
}

export default App;
