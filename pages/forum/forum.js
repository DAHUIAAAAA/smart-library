// pages/forum/forum.js
let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        forum: null
    },

    setDate () {
        let date = new Date();

        let day =  date.toLocaleDateString();
        let time = date.toLocaleTimeString();

        let dayAndTime = day + ' ' + time;
        
        this.setData({
            date: dayAndTime
        });
    },

    goToDetail (e) {
        let forumid = e.currentTarget.dataset.forumid;
        console.log(forumid)
        wx.navigateTo({
            url: '../forumDetail/forumDetail?forumid=' + forumid
        })
    },

    addPost () {
        wx.navigateTo({
            url: '../addForum/addForum',
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            forum: app.globalData.forum
        })
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