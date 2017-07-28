import { StackNavigator } from 'react-navigation';

import Colors from './constants/Colors';
import Splash from './pages/Splash';

const App = StackNavigator(
  {
    Splash: { screen: Splash }
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
