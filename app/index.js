import React, {Fragment} from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';

import AppNavigator from './config/routes';

EStyleSheet.build({
  $primaryOrange: '#F58220',
  $primaryDarkOrange: '#D8690A',
});

const App = () => <AppNavigator />;

export default App;
