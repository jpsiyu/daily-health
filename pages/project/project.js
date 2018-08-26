// pages/project/project.js

const config = require('../../utils/config')
const util = require('../../utils/util')
const app = getApp()

const defaultDesc = '选择右侧的项目，提升能量'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cfg: undefined,
    desc: undefined,
    select: undefined,
    percent: undefined,
    left: undefined,
    active: undefined,
    finish: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cfg = config.getConfig(options.p)
    const desc = defaultDesc
    const percent = `${app.appdata.percent() * 100}%`
    const left = util.formatSecond(app.appdata.distance())
    const finish = app.appdata.isFull()
    this.setData({ cfg, desc, percent, left, finish })
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
    clearInterval(this.timer)
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

  startTimer: function () {
    if(app.appdata.isFull()) return

    this.timer = setInterval(() => {
      if(app.appdata.isFull()){
        this.clearTimer()
        this.setData({
          finish: true
        })
        return
      }
      app.appdata.increase()
      const left = app.appdata.distance()
      const percent = `${app.appdata.percent() * 100}%`
      this.setData({
        left: util.formatSecond(left),
        percent: percent,
      })
    }, 1000)
  },

  clearTimer(){
      clearInterval(this.timer)
      this.timer = undefined
  },

  onItemTap: function (event) {
    const item = event.currentTarget.dataset.item
    let desc = item.desc
    let active = this.data.active

    if (!active) {
      active = item.name
    } else if (active == item.name) {
      active = ''
      desc = defaultDesc
    } else {
      active = item.name
    }

    if (!active && this.timer) {
      this.clearTimer()
    } else if(active && !this.timer) {
      this.startTimer()
    }
    this.setData({ select: item, desc, active })
  },

})