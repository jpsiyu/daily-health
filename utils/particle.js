class Particle{
    constructor(){
        this.life = 1 * 1000
        this.ySpeed = Math.random() * 0.1

        this.x = this.randomX()
        this.y = 0
        this.active = true
        this.pass = 0
    }

    randomX(){
        return 100 + Math.random() * 550
    }
    
    update(elapsed){
        this.pass += elapsed
        if(this.pass > this.life){
            this.active = false
        }

        if(this.active){
            this.y += this.ySpeed * elapsed
        }
    }

    relife(){
        this.x = this.randomX()
        this.y = 0
        this.active = true
        this.pass = 0
    }
}

module.exports = Particle