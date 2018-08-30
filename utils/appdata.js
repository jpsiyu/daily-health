const StatueConfig = [
    {id: 1, score:0, gif:'/images/grim.gif', desc:'离死亡只有一步之遥'},
    {id: 2, score:50, gif:'/images/dog.gif', desc:'累成狗了，汪汪汪...'},
    {id: 3, score:100, gif:'/images/horse.gif', desc:'如千里马般狂奔着'},
    {id: 4, score:160, gif:'/images/tiger.gif', desc:'猛虎出山，虎虎生威'},
]

class AppData {
    constructor() {
        this.total = 180
        this.dispearTime = 3 * 3600

        this.quitTime = undefined
        this.current = undefined
        this.last = undefined
    }

    refreshUser(user){
        this.last = user.point
        this.quitTime = user.quitTime

        const curTime = new Date().getTime()
        const pass = (curTime - user.quitTime) / 1000
        const percent = pass / this.dispearTime
        this.current = this.last - Math.floor(this.total * percent)
        this.current = Math.max(0, this.current)
    }

    increase() {
        if (this.current < this.total)
            this.current++
        return this.current
    }

    distance() {
        return this.total - this.current
    }

    percent() {
        return this.current / this.total
    }

    isFull() {
        return this.current == this.total
    }

    getGif() {
        let path = ''
        StatueConfig.forEach(item => {
            if(this.current >= item.score)
                path = item.gif
        })
        return path
    }

    getDesc(){
        let desc = ''
        StatueConfig.forEach(item => {
            if(this.current >= item.score)
                desc = item.desc
        })
        return desc
    }

    loaded(){
        return this.quitTime != undefined
    }
}

module.exports = AppData