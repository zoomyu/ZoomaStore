import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MainHome extends React.Component {
  static navigationOptions = {
    title: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Image style={{ width: 32, height: 32, tintColor }} source={require('../imgs/icon_person.png')} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>我的</Text>
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
