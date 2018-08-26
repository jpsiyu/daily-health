const util = require('./util.js')

class CommunicateOptions {
    constructor(method, path, data, success) {
        this.method = method
        this.path = path
        this.data = data
        this.success = success
    }
}

class Communicate {
    constructor() {
        //this.serverUrl = 'https://qrj.qianrenju.club'
        this.serverUrl = 'http://health.localhost'
        this.waiting = false
    }


    willSend2Server() {
        this.waiting = true
        wx.showLoading({ title: '数据加载中', mask: true })
    }

    receFromServer() {
        this.waiting = false
        wx.hideLoading()
    }

    send2Server(options) {
        if (this.waiting) {
            console.log(`block ${options.path}, communicating...`)
            return
        }

        this.willSend2Server()
        wx.request({
            url: this.serverUrl + options.path,
            method: options.method,
            data: options.data,
            success: res => {
                this.receFromServer()
                options.success(res)
            },
            fail: res => {
                this.receFromServer()
                util.wxAlert(res)
            }
        })
    }

    requestOpenId(code) {
        const options = new CommunicateOptions(
            'GET',
            '/api/openid',
            { code },
            res => {
                const serverMsg = res.data
                if (serverMsg.ok) {
                    const user = serverMsg.user
                    getApp().authorize.setOpenId(user.openid)
                    getApp().appdata.refreshUser(user)
                    getApp().eventListener.triggerEvent('loaded')
                } else {
                    util.alert(serverMsg.message)
                }
            }
        )
        this.send2Server(options)
    }

    postUserInfo() {
        const data = {
            openid: getApp().authorize.openid,
            quitTime: new Date().getTime(),
            point: getApp().appdata.current,
        }
        const options = new CommunicateOptions(
            'POST',
            '/api/update',
            data,
            res => {
                const serverMsg = res.data
                if (serverMsg.ok) {

                } else {
                    util.alert(serverMsg.message)
                }
            }
        )
        this.send2Server(options)
    }
}

module.exports = Communicate