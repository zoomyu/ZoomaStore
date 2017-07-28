import { StackNavigator, TabNavigator } from 'react-navigation';

import Colors from './constants/Colors';

import Splash from './pages/Splash';

import Home from './pages/MainHome';
import Category from './pages/MainCategory';
import ShoppingCar from './pages/MainShoppingCar';
import Mine from './pages/MainMine';

const TabContainer = TabNavigator(
  {
    Home: { screen: Home },
    Category: { screen: Category },
    ShoppingCar: { screen: ShoppingCar },
    Mine: { screen: Mine }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.activeTabColor,
      inactiveTintColor: Colors.inactiveTabColor,
      showIcon: true,
      style: {
        backgroundColor: Colors.tabColor
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Main: { screen: TabContainer }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.hColor
      },
      headerTitleStyle: {
        color: Colors.hTitleColor,
        fontSize: 20,
        alignSelf: 'center'
      },
      headerTintColor: Colors.hTitleColor
    }
  },
);

export default App;
