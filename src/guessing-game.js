class GuessingGame {
    
    constructor() {
    this.half
    }

    setRange(min, max) {
        this.min = min
        this.max = max    
    }

    guess() {         
        return this.half = Math.ceil((this.min + this.max) / 2)
    }

    lower() {
        this.setRange(this.min, this.half)
        this.guess()
    }

    greater() {
        this.setRange(this.half, this.max)
        this.guess()
    }
}

module.exports = GuessingGame;
