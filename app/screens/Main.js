import React, {Component} from 'react';
import {View} from 'react-native';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {MainButton} from '../components/Button';

class Main extends Component {
  _mainButtonOnPress = () => {
    this.props.navigation.navigate('Catalog', {title: 'Catalog'});
  };

  render() {
    return (
      <Container>
        <Logo />
        <MainButton onPress={this._mainButtonOnPress} />
      </Container>
    );
  }
}

export default Main;
