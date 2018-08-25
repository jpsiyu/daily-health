// pages/project/project.js

const config = require('../../utils/config')

const defaultDesc = '选择右侧的项目，提升能量'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cfg: undefined,
    desc: undefined,
    select: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cfg = config.getConfig(options.p)
    const desc = defaultDesc
    this.setData({cfg, desc})
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

  onItemTap: function(event){
    const item = event.currentTarget.dataset.item
    const desc = item.desc
    this.setData({select: item, desc})
  },

})