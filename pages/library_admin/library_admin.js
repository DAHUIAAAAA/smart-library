// pages/library/library.js
let hidetime = 0;
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    place: 'A201',
    open: false,
    deskid: 0,
    seatid: 0,
    imageUrl: 'iconfont/选座.png',
    deg: 0,
    desk: app.globalData.desk,
    menu: ['current', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden'],
    timeId: []
  },

  seatid: function(e) {
    this.setData({
      deskid: e.currentTarget.dataset.deskid,
      seatid: e.currentTarget.dataset.seatid,
    });
    let deskId = this.data.deskid;
    let seatId = this.data.seatid;
    let seat = this.data.desk[deskId][seatId];
    let state = seat.state;
    if (state == 1) {
      wx.showModal({
        content: '有人',
      })
    } else if (state == 0) {
      wx.showModal({
        content: '空位',
      })
    } else if (state == 3) {
      wx.showModal({
        content: '离开',
      })
    } else {
      wx.showModal({
        content: '占座'
      });
    }
  },

  slide_left: function(e) {
    if (this.data.open) {
      console.log(this.data.open);
      this.setData({
        open: false,
        deg: 0
      });
    } else {
      this.setData({
        open: true,
        deg: -180
      });
    }
  },

  menu_down: function(e) {
    let index = e.currentTarget.dataset.index;
    for (let i = 0; i < this.data.menu.length; i++) {
      this.data.menu[i] = 'hidden';
      console.log(this.data.menu[i]);
    }
    this.data.menu[index] = 'current';
    this.setData({
      menu: this.data.menu
    });
  },

  imageChange: function(e) {
    console.log(e.currentTarget.dataset.id);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    setInterval(() => {
      this.setData({
        desk: app.globalData.desk
      })
      let desk = this.data.desk;
      for (let i = 0; i < desk.length; i++) {
        for (let j = 0; j < desk[i].length; j++) {
          let seat = desk[i][j];
          if (seat.state == 0) {
            seat.imageUrl = 'iconfont/xuanzuo.png';
          } else if (seat.state == 1) {
            seat.imageUrl = 'iconfont/zuowei.png';
          } else if (seat.state == 3 && seat.laststate == 3) {
            seat.imageUrl = 'iconfont/zhanzuo.png';
          } else if (seat.state == 3 && seat.laststate == 0) {
            seat.imageUrl = 'iconfont/likai.png';
          }
        }
      }
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    // this.setData({
    //   desk: app.globalData.desk
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})