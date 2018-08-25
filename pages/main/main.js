// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'midOn': true,
    'gif': '/images/tiger.gif',
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
    console.log('body...')
  },

  onItemMentalTap: function () {
    console.log('mental...')
  },

  onItemEnvTap: function () {
    console.log('env...')
  },

  onItemOtherTap: function () {
    console.log('other...')
  },

  onItemMidTap: function () {
    const state = !this.data.midOn
    const g = this.chooseGif(100)
    this.setData({
      midOn: state,
      gif: g,
    })
  },

  chooseGif: function(life){
    const r = Math.random()
    if(r < 0.25){
      return '/images/tiger.gif'
    }else if(r < 0.5){
      return '/images/horse.gif'
    }else if( r < 0.75){
      return '/images/dog.gif'
    }else{
      return '/images/grim.gif'
    }
  }
})