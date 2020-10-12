// pages/signIn/signIn.js
const app = getApp();
let showpassword = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name: '',
    noneorblock: 'none',
    inputvalue: null,
    password: '',
    passwordtype: 'password',
    showpassword: 'iconfont/biyan.png',
    admin: {
      name: '201711631107',
      password: 'dage'
    },
    student: {
      name: '201711672124',
      password: 'baba'
    },
    array: ['电气工程及其自动化', '物联网工程', '软件工程', '电子信息工程'],
    objectArray: [
      {
        id: 0,
        name: '电气工程及其自动化'
      },
      {
        id: 1,
        name: '物联网工程'
      },
      {
        id: 2,
        name: '软件工程'
      },
      {
        id: 3,
        name: '电子信息工程'
      }
    ],
    index: 0
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  getname: function (e) {
    // console.log(e.detail.value.split(""))
    if (e.detail.value.split("").length == 0) {
      this.setData({
        noneorblock: 'none'
      });
    } else {
      this.setData({
        noneorblock: ''
      });
    }
    this.setData({
      name: e.detail.value
    });
  },

  removename: function (e) {
    this.setData({
      inputvalue: '',
      noneorblock: 'none'
    });
  },

  getpassword: function (e) {
    // console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    });
  },

  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },

  isshowpassword: function (e) {
    if (!showpassword) {
      showpassword = true;
      this.setData({
        showpassword: 'iconfont/zhengyan.png',
        passwordtype: 'text'
      });
    } else {
      showpassword = false;
      this.setData({
        showpassword: 'iconfont/biyan.png',
        passwordtype: 'password'
      });
    }
  },

  signin: function (e) {
    let name = this.data.name;
    let password = this.data.password;
    let adminName = this.data.admin.name;
    let adminPassword = this.data.admin.password;
    let studentName = this.data.student.name;
    let studentPassword = this.data.student.password;
    if (name == adminName && password == adminPassword) {
      app.globalData.admin = true;
      wx.navigateTo({
        url: '../choose/choose',
      })
      console.log(app.globalData.admin)
    } else if (name == studentName && password == studentPassword) {
      app.globalData.admin = false;
      wx.navigateTo({
        url: '../choose/choose',
      })
    }
    wx.navigateTo({
      url: '../choose/choose',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})