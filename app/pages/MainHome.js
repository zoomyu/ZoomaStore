import React from 'react';
import { View, Text, Image, Animated, ScrollView, StatusBar, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import ViewPager from 'react-native-viewpager';

import Colors from '../constants/Colors';
import { response } from '../data/home';

const deviceWidth = Dimensions.get('window').width;

export default class MainHome extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(response.data.carouselAds)
    };
  }

  static navigationOptions = {
    title: '首页',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image style={{ width: 32, height: 32, tintColor }} source={require('../imgs/icon_home.png')} />
    )
  };

  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
    this._value = 0;
    this._animatedValue.addListener(({ value }) => {
      this._value = value;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.primaryDark}
          barStyle={'light-content'}
        />
        <ScrollView
          style={styles.container}
          removeClippedSubviews={true}
          keyboardDismissMode="on-drag"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this._animatedValue } } }]
          )}
          endFillColor={Colors.mainBackground}
        >
          {this._renderCarouselAds()}
          {this._renderSummary(response.data.summary)}
        </ScrollView>
        {this._renderSearch(response.data.search)}
      </View>
    );
  }

  _renderSearch = prompt => (
    <Animated.View style={[styles.searchView, { backgroundColor:
      this._animatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [
          'rgba(255,87,34,0)',
          'rgba(255,87,34,1)'
        ] })
    }]}
    >
      <View style={styles.searchBox}>
        <Image
          style={[styles.icon, { marginLeft: 8, tintColor: Colors.icon }]}
          source={require('../imgs/icon_serach.png')}
        />
        <Text style={styles.searchText}>{prompt}</Text>
      </View>
      <View style={{ marginLeft: 16, marginRight: 8 }}>
        <Image style={{ width: 24, height: 24 }} source={require('../imgs/icon_scanning.png')} />
        <Text style={{ fontSize: 8 }}>扫一扫</Text>
      </View>
    </Animated.View>
  )

  _renderCarouselAds = () => (
    <View style={styles.carouselAdsBox} >
      <ViewPager
        dataSource={this.state.dataSource}
        renderPage={this._renderAdPage}
        isLoop={true}
        autoPlay={true}
      />
    </View>
  )

  _renderAdPage = (data: Object, pageID: number | string) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => this.onAdClick(pageID, data)}
    >
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <Image
          source={data.img}
          style={{ left: 50, height: '100%', width: deviceWidth }}
          resizeMode={'cover'}
        />
        <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', padding: 16 }}>
          <Text style={{ fontSize: 20 }}>{data.title}</Text>
          <Text style={{ fontSize: 16, marginTop: 8 }} >{data.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  _renderSummary = (summaryList) => {
    if (summaryList) {
      return summaryList.map((summary, i) => (
        <TouchableOpacity key={i} onPress={() => this.onClickSummary(summary)}>
          <View style={{ marginTop: 16 }}>
            <Image
              style={{
                height: 9 * (deviceWidth / 16),
                width: deviceWidth
              }}
              source={summary.img}
            />
            <View style={{ position: 'absolute', bottom: 16, margin: 16 }}>
              <View style={{ borderBottomWidth: 1, borderColor: Colors.white }}>
                <Text style={{ fontSize: 16, color: Colors.white }}>{summary.title}</Text>
              </View>
              <Text style={{ fontSize: 10, color: Colors.white }}>{summary.content}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ));
    }
    return <View />;
  }

  onScroll = (event) => {
    console.log(event.nativeEvent.contentOffset.y);
  }

  onClickSummary = (summary) => {
    console.log(summary);
  }

  onAdClick = (id, data) => {
    console.log(data);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchView: {
    position: 'absolute',
    padding: 8,
    top: 0,
    flexDirection: 'row',
    width: deviceWidth,
    height: 48
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(220,220,220,0.5)'
  },
  searchText: {
    marginLeft: 8,
    color: Colors.icon
  },
  icon: {
    width: 24,
    height: 24
  },
  carouselAdsBox: {
    height: 9 * (deviceWidth / 16),
    width: deviceWidth
  },
  summaryCardView: {
    height: 9 * ((deviceWidth - 32) / 16),
    width: deviceWidth - 32
  },
  cardContent: {
    fontSize: 12,
    color: Colors.gray
  },
  page: {
    flex: 1,
    width: deviceWidth
  }
});
