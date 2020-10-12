// pages/library/library.js
let seatNumber = 0;
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
    lastdeskid: 0,
    lastseatid: 0,
    imageUrl: 'iconfont/选座.png',
    deg: 0,
    desk: app.globalData.desk,
    menu: ['current', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden']
  },


  seatid: function (e) {

    this.setData({
      deskid: e.currentTarget.dataset.deskid,
      seatid: e.currentTarget.dataset.seatid,
    });

    let state = this.data.desk[this.data.deskid][this.data.seatid].state;
    let thisDeskId = this.data.deskid
    let thisSeatId = this.data.seatid;
    
    //选了几个座位
    //如果座位有人坐下，则弹窗
    if (state == 1 || state == 2 || state == 3) {
      
      wx.showModal({
        content: '已有人坐下',
      })

    }
    //如果没有人坐下，且选择的座位为0个
    else if(state == 0 && seatNumber == 0) { 

      this.data.desk[thisDeskId][thisSeatId].imageUrl = 'iconfont/zuowei.png';

        this.setData({
          desk: this.data.desk,
          lastdeskid: e.currentTarget.dataset.deskid,
          lastseatid: e.currentTarget.dataset.seatid,
          state: 1
        });

        seatNumber = 1;
    }
    //如果已经选择一个座位
    else if (state == 0 && seatNumber == 1){

      this.data.desk[thisDeskId][thisSeatId].imageUrl = 'iconfont/xuanzuo.png';

      this.setData({
        desk: this.data.desk
      });

      let lastDeskId = this.data.lastdeskid;
      let lastSeatId = this.data.lastseatid;
      
      if (thisDeskId == lastDeskId && thisSeatId == lastSeatId) {
        seatNumber = 0;
        this.setData({
          state: 0
        });
        console.log(this.data.state);
      }else {
        wx.showModal({
          content: '每次只能选一个座位哦',
        })
      }
    }
  },

  slide_left: function (e) {

    if (this.data.open) {

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

    for(let i = 0; i<this.data.menu.length; i++) {
      this.data.menu[i] = 'hidden';
      console.log(this.data.menu[i]);
    }

    this.data.menu[index] = 'current';

    this.setData({
      menu: this.data.menu
    });

  },

  imageChange:function(e) {

    console.log(e.currentTarget.dataset.id);
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      let deskdata = app.globalData.desk;
      let desk = this.data.desk;
      this.setData({
        desk: deskdata
      });
      for (let i = 0; i < desk.length; i++) {
        for (let j = 0; j < desk[i].length; j++) {
          let seat = this.data.desk[i][j];
          if (seat.state == 0) {
            seat.imageUrl = 'iconfont/xuanzuo.png';
            this.setData({
              desk: this.data.desk
            });
          } else if (seat.state == 1 || seat.state == 2 || seat.state == 3) {
            seat.imageUrl = 'iconfont/zuowei.png';
            this.setData({
              desk: this.data.desk
            });
          }
        }
      }
    },1000)
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