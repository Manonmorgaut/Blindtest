class Timer {
    constructor(gameDuration) {
      this.currentTime = gameDuration;
      this.intervalId = null;
    }
    startTimer(callback) {
      this.intervalId = setInterval(() => {
        console.log(this.currentTime);
        this.currentTime--;
        callback();
        if (this.currentTime === 0) {
          this.stopTimer();
        }
      }, 1000);
    }
    getMinutes() {
      return Math.round(this.currentTime / 60);
    }
    getSeconds() {
      return this.currentTime % 60;
    }
    twoDigitsNumber(number) {
      if (number < 10) return (number = `0${number}`);
    }
    stopTimer() {
      clearInterval(this.intervalId);
    }
    resetTimer() {
      this.currentTime = gameDuration;
    }
  }