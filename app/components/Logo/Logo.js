import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.logoImage}
      resizeMode="contain"
      source={require('../../assets/images/ralali-logo.png')}
    />
    <Text style={styles.logoText}>Business starts here</Text>
  </View>
);

export default Logo;
