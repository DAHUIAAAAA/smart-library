let that;
const io = require('/utils/weapp.socket.io.js');
//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    that = this;
    this.socketStart();
  },
  socketStart: function() {
    const socket = (this.socket = io(
      'ws://193.112.63.186:3000',
    ))
    socket.on('my otherevent', data => {
      that.socketReceiveMessage(data);
    })
  },
  socketReceiveMessage: function(receivedata) {
    let deskdata = this.globalData.deskdata;
    let desk = this.globalData.desk;
    deskdata = receivedata;
    console.log(this.globalData.desk)
    //循环桌子
    for (let i = 0; i < desk.length; i++) {
      //循环每张椅子
      for (let j = 0; j < desk[i].length; j++) {
        desk[i][j].desk = deskdata[i][j].desk;
        desk[i][j].laststate = deskdata[i][j].laststate;
        desk[i][j].state = deskdata[i][j].state;
      }
    }
  },
  globalData: {
    userInfo: null,
    admin: false,
    deskdata:'',
    desk: [
      [{
          desk: 0,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 0,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 0,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 0,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        }
      ],
      [{
          desk: 1,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 1,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 1,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 1,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        }
      ],
      [{
          desk: 2,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 2,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 2,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 2,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        }
      ],
      [{
          desk: 3,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 3,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 3,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        },
        {
          desk: 3,
          imageUrl: "",
          state: 0,
          laststate: 0,
          time: '',
          interval: ''
        }
      ]
    ],
    forum: [
      {
        forum_id:'0',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555528061203&di=eb3f0fbf275889cc6dfc40bb884941a2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F02%2F20160802101354_tSMC3.jpeg',
        name: '啾咪',
        date: null,
        title: '甘筱青教授向图书馆捐赠图书',
        content: '甘筱青教授所赠图书包括《〈论语〉的公理化诠释》（中文版、中英文对照版、中法文对照版、中日文对照版）、《〈孟子〉的公理化诠释》（中文版、中英文对照版）、《〈老子〉的公理化诠释》、《〈荀子〉的公理化诠释》以及《对外汉语教程》等。关于特色文献建设，他建议将古丝绸之路始发港徐闻、雷州文化和法租界时期的湛江文献作为收藏重点。  甘筱青教授为清华大学清华大学应用数学博士、复旦大学管理科学与工程博士后，知识涉猎广泛，学术造诣深厚，兼任了孔子学院总部（国家汉办）教学指导委员会委员、教育部科技委管理学部委员、中国高等教育学会大学文化研究分会副理事长、国际儒学联合会理事等职务。教学与研究涵盖应用数学、管理科学与工程、文化传承与创新等多领域。他先后主持完成多项国家自然科学基金项目和国家人文社科基金项目和国际合作项目，多项成果获奖。近年来甘筱青教授率领团队开展的“中华经典的公理化诠释”研究，力图为儒学的现代转型探索了一条实现路径，获得国内外学界的好评。这次捐赠给图书馆的主要为集成其“中华经典的公理化诠释”研究成果的丛书。甘教授的捐赠为图书馆增添了珍贵馆藏，他关于地方文献的收藏建议对特色馆藏建设具有启发意义。',
        comment: 2013,
        browse: 2012
      },
      {
        forum_id:'1',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555528061203&di=eb3f0fbf275889cc6dfc40bb884941a2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F02%2F20160802101354_tSMC3.jpeg',
        name: '啾咪',
        date: null,
        title: '甘筱青教授向图书馆捐赠图书',
        content: '甘筱青教授所赠图书包括《〈论语〉的公理化诠释》（中文版、中英文对照版、中法文对照版、中日文对照版）、《〈孟子〉的公理化诠释》（中文版、中英文对照版）、《〈老子〉的公理化诠释》、《〈荀子〉的公理化诠释》以及《对外汉语教程》等。关于特色文献建设，他建议将古丝绸之路始发港徐闻、雷州文化和法租界时期的湛江文献作为收藏重点。  甘筱青教授为清华大学清华大学应用数学博士、复旦大学管理科学与工程博士后，知识涉猎广泛，学术造诣深厚，兼任了孔子学院总部（国家汉办）教学指导委员会委员、教育部科技委管理学部委员、中国高等教育学会大学文化研究分会副理事长、国际儒学联合会理事等职务。教学与研究涵盖应用数学、管理科学与工程、文化传承与创新等多领域。他先后主持完成多项国家自然科学基金项目和国家人文社科基金项目和国际合作项目，多项成果获奖。近年来甘筱青教授率领团队开展的“中华经典的公理化诠释”研究，力图为儒学的现代转型探索了一条实现路径，获得国内外学界的好评。这次捐赠给图书馆的主要为集成其“中华经典的公理化诠释”研究成果的丛书。甘教授的捐赠为图书馆增添了珍贵馆藏，他关于地方文献的收藏建议对特色馆藏建设具有启发意义。',
        comment: 2013,
        browse: 2012
      },
      {
        forum_id:'2',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555528061203&di=eb3f0fbf275889cc6dfc40bb884941a2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F02%2F20160802101354_tSMC3.jpeg',
        name: '啾咪',
        date: null,
        title: '甘筱青教授向图书馆捐赠图书',
        content: '甘筱青教授所赠图书包括《〈论语〉的公理化诠释》（中文版、中英文对照版、中法文对照版、中日文对照版）、《〈孟子〉的公理化诠释》（中文版、中英文对照版）、《〈老子〉的公理化诠释》、《〈荀子〉的公理化诠释》以及《对外汉语教程》等。关于特色文献建设，他建议将古丝绸之路始发港徐闻、雷州文化和法租界时期的湛江文献作为收藏重点。  甘筱青教授为清华大学清华大学应用数学博士、复旦大学管理科学与工程博士后，知识涉猎广泛，学术造诣深厚，兼任了孔子学院总部（国家汉办）教学指导委员会委员、教育部科技委管理学部委员、中国高等教育学会大学文化研究分会副理事长、国际儒学联合会理事等职务。教学与研究涵盖应用数学、管理科学与工程、文化传承与创新等多领域。他先后主持完成多项国家自然科学基金项目和国家人文社科基金项目和国际合作项目，多项成果获奖。近年来甘筱青教授率领团队开展的“中华经典的公理化诠释”研究，力图为儒学的现代转型探索了一条实现路径，获得国内外学界的好评。这次捐赠给图书馆的主要为集成其“中华经典的公理化诠释”研究成果的丛书。甘教授的捐赠为图书馆增添了珍贵馆藏，他关于地方文献的收藏建议对特色馆藏建设具有启发意义。',
        comment: 2013,
        browse: 2012
      },
      {
        forum_id:'3',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555528061203&di=eb3f0fbf275889cc6dfc40bb884941a2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F02%2F20160802101354_tSMC3.jpeg',
        name: '啾咪',
        date: null,
        title: '甘筱青教授向图书馆捐赠图书',
        content: '甘筱青教授所赠图书包括《〈论语〉的公理化诠释》（中文版、中英文对照版、中法文对照版、中日文对照版）、《〈孟子〉的公理化诠释》（中文版、中英文对照版）、《〈老子〉的公理化诠释》、《〈荀子〉的公理化诠释》以及《对外汉语教程》等。关于特色文献建设，他建议将古丝绸之路始发港徐闻、雷州文化和法租界时期的湛江文献作为收藏重点。  甘筱青教授为清华大学清华大学应用数学博士、复旦大学管理科学与工程博士后，知识涉猎广泛，学术造诣深厚，兼任了孔子学院总部（国家汉办）教学指导委员会委员、教育部科技委管理学部委员、中国高等教育学会大学文化研究分会副理事长、国际儒学联合会理事等职务。教学与研究涵盖应用数学、管理科学与工程、文化传承与创新等多领域。他先后主持完成多项国家自然科学基金项目和国家人文社科基金项目和国际合作项目，多项成果获奖。近年来甘筱青教授率领团队开展的“中华经典的公理化诠释”研究，力图为儒学的现代转型探索了一条实现路径，获得国内外学界的好评。这次捐赠给图书馆的主要为集成其“中华经典的公理化诠释”研究成果的丛书。甘教授的捐赠为图书馆增添了珍贵馆藏，他关于地方文献的收藏建议对特色馆藏建设具有启发意义。',
        comment: 2013,
        browse: 2012
      }
    ]
  }
})