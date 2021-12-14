export class Chronometer {
  constructor() {
    this.currentTime = 30;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (typeof callback === "function") callback();
      this.currentTime -= 1;
    }, 1000);
  }

  getMinutes() {
    // return this.currentTime / 60 | 0
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.computeTwoDigitNumber(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // let result = value.toString()
    // if (result.length ===1) result = '0' + result
    // return result
    return String(value).length === 2 ? String(value) : "0" + value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ":" + seconds;
  }
}

if (typeof module !== "undefined") {
  module.exports = Chronometer;
}
