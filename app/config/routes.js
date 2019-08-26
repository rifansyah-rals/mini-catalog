import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from '../screens/Main';
import DetailProduct from '../screens/DetailProduct';
import Catalog from '../screens/Catalog';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      header: () => null,
    },
  },
  DetailProduct: {
    screen: DetailProduct,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
  Catalog: {
    screen: Catalog,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default createAppContainer(AppNavigator);
