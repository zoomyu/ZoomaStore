const successData = {
  code: 1,
  data: {
    search: '搜索！！！',
    carouselAds: [
      { id: 0, title: '般若', content: '如实认知一切事物\n和万物本源的终极智慧', img: require('./images/br.png') },
      { id: 1, title: '春芽', content: '体会纯粹芽庄的甜美', img: require('./images/cy.png') },
      { id: 2, title: '海涯', content: '踏遍天涯觅真香', img: require('./images/hy.png') },
      { id: 3, title: '金刚', content: '无坚不摧，击破一切邪见与结缚', img: require('./images/jg.png') },
      { id: 4, title: '龙桂', content: '金桂残影处，唯有暗香来', img: require('./images/lg.png') },
      { id: 5, title: '清观', content: '繁华盛世需清观', img: require('./images/qg.png') }
    ],
    summary: [
      { id: 0, type: 'image', title: '养智香铺', content: '养智零售店', img: require('./images/pic.jpg') },
      { id: 1, type: 'video', title: '龙桂', content: '精彩视频', img: require('./images/pic1.jpg') },
      { id: 2, type: 'image', title: '系列产品', content: '养智产品系列', img: require('./images/pic2.jpg') }
    ]
  }
};

module.exports = {
  response: successData
};
