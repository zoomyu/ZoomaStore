import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MainHome extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Image style={{ width: 32, height: 32, tintColor }} source={require('../imgs/icon_home.png')} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
