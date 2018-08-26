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
        if (this.current >= 160) {
            return '/images/tiger.gif'
        } else if (this.current >= 100) {
            return '/images/horse.gif'
        } else if (this.current >= 50) {
            return '/images/dog.gif'
        } else {
            return '/images/grim.gif'
        }
    }

    loaded(){
        return this.quitTime != undefined
    }
}

module.exports = AppData