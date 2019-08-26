import React, {Component} from 'react';
import {FlatList} from 'react-native';

import {Container} from '../components/Container';
import {CardProduct} from '../components/Card';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      seed: 1,
      page: 1,
      nextPage: 2,
      isLoading: false,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this._makeRequest();
  }

  _makeRequest = () => {
    const {page, seed} = this.state;

    const URL_API = `https://product-catalog-api.herokuapp.com/products/?seed=${seed}&page=${page}&results=20`;

    fetch(URL_API)
      .then(response => response.json())
      .then(response => {
        this.setState({
          products:
            page === 1
              ? response.result
              : [...this.state.products, ...response.result],
          error: response.error || null,
          nextPage: response.nextPage,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.state({error, loading: false, refreshing: false});
        alert("Couldn't get data");
      });
  };

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1,
      },
      () => {
        this._makeRequest();
      },
    );
  };

  _handleLoadMore = () => {
    const {nextPage} = this.state;

    if (nextPage !== null) {
      this.setState(
        {
          page: nextPage,
        },
        () => {
          this._makeRequest();
        },
      );
    }
  };

  _onCardPress = item => {
    this.props.navigation.navigate('DetailProduct', {
      title: 'Product Detail',
      item,
    });
  };

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.products}
          renderItem={({item}) => (
            <CardProduct
              productName={item.productName}
              productPrice={item.productPrice}
              urlImage={item.productImage}
              onPress={() => this._onCardPress(item)}
            />
          )}
          keyExtractor={item => item.productPrice}
          numColumns={2}
          refreshing={this.state.refreshing}
          onRefresh={this._handleRefresh}
          onEndReached={this._handleLoadMore}
          onEndReachedThreshold={10}
        />
      </Container>
    );
  }
}

export default Catalog;
