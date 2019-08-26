import React, {Component} from 'react';
import {TouchableHighlight, Text, View} from 'react-native';

import styles from './styles';

class MainButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={styles.$buttonUnderlayColor}
        onPress={this.props.onPress}>
        <View>
          <Text style={styles.buttonText}>See our products</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default MainButton;
