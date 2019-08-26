import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

class DetailProduct extends Component {
  render() {
    const {
      productName,
      productPrice,
      productImage,
    } = this.props.navigation.state.params.item;

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{productName}</Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: productImage}}
        />
        <Text style={styles.textPrice}>{productPrice}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  textTitle: {
    paddingVertical: 24,
    fontSize: 20,
  },
  textPrice: {
    paddingVertical: 24,
    fontSize: 20,
  },
});

export default DetailProduct;
