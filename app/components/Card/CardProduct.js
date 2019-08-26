import React, {Component} from 'react';
import {TouchableWithoutFeedback, View, Image, Text} from 'react-native';

import styles from './styles';

import CardView from 'react-native-cardview';

const URL_PLACEHOLDER = 'http://lorempixel.com/640/480/fashion/';

class CardProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      productName,
      productPrice,
      urlImage = URL_PLACEHOLDER,
      onPress,
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <CardView
            style={styles.card}
            cardElevation={2}
            cardMaxElevation={3}
            cornerRadius={5}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{uri: urlImage}}
            />
            <Text style={styles.textProductName}>{productName}</Text>
            <Text style={styles.textProductPrice}>{productPrice}</Text>
          </CardView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CardProduct;
