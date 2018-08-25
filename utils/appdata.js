class AppData {
    constructor() {
        this.current = 80
        this.total = 180
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
}

module.exports = AppData