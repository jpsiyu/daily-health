const app = getApp()

// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'midOn': true,
    'gif': '/images/tiger.gif',
    percent: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    const percent = app.appdata.percent()
    const gif = app.appdata.getGif()
    this.setData({
      percent: `${percent*100}%`,
      gif: gif,
    })

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

  },

  onItemBodyTap: function () {
    wx.navigateTo({
      url: '../project/project?p=body'
    })
  },

  onItemMentalTap: function () {
    wx.navigateTo({
      url: '../project/project?p=mental'
    })
  },

  onItemEnvTap: function () {
    wx.navigateTo({
      url: '../project/project?p=env'
    })
  },

  onItemOtherTap: function () {
    wx.navigateTo({
      url: '../project/project?p=other'
    })
  },

  onItemMidTap: function () {
    const state = !this.data.midOn
    this.setData({
      midOn: state,
    })
  },
})