import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MainHome extends React.Component {
  static navigationOptions = {
    title: '分类',
    tabBarIcon: ({ tintColor }) => (
      <Image style={{ width: 32, height: 32, tintColor }} source={require('../imgs/icon_category.png')} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>分类</Text>
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
