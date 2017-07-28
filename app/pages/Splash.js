import React from 'react';
import {
  Dimensions,
  Animated,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import Colors from '../constants/Colors';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../imgs/logo_yzwh.png');

export default class Splash extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.bounceValue, {
      toValue: 1.8,
      duration: 1200
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} animated={true} />
        <Animated.View
          style={{
            width: maxWidth,
            height: maxHeight,
            backgroundColor: Colors.sColor,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ scale: this.state.bounceValue }]
          }}
        >
          <Image
            style={{ width: 60, height: 190, tintColor: Colors.sImageColor }}
            source={splashImg}
          />
        </Animated.View>
        <Text
          style={{
            position: 'absolute',
            bottom: 16,
            width: maxWidth,
            textAlign: 'center',
            fontSize: 14,
            color: Colors.sTitleColor
          }}
        >
          &copy;2017 养智 沪ICP备11002007号
        </Text>
      </View>
    );
  }
}
