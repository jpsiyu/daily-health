const Particle = require('./particle')

class ParticleMgr {
    constructor() {
        this.particles = []
        this.working = false
        this.limit = 10
        this.timer = undefined
        this.updateTime = 100
    }

    start(cb) {
        this.working = true
        this.timer = setInterval(() => {
            this.fireOne()
            this.update(this.updateTime)
            cb()
        }, this.updateTime)
    }

    stop(cb) {
        this.working = false
        clearInterval(this.timer)
        this.particles.forEach(particle => {
            particle.active = false
        })
        cb()
    }

    fireOne() {
        let particle
        for (let i = 0; i < this.particles.length; i++) {
            particle = this.particles[i]
            if (!particle.active) {
                particle.relife()
                return
            }
        }
        particle = new Particle()
        this.particles.push(particle)
    }

    update(elapsed) {
        this.particles.forEach(particle => {
            particle.update(elapsed)
        })
    }
}

module.exports = ParticleMgr