const state = {
  time: 59,
  display: "01:00",
  buttonDisabler: false,
  ballTimer: null,
  endTimer: "00:05"
};

const getters = {
  get_display: state => state.display,
  get_buttonState: state => state.buttonDisabler,
  get_ballTimer: state => state.ballTimer,
  get_endTimer: state => state.endTimer
};

const actions = {
  gameStartDisplay() {
    state.display = null;
    state.buttonDisabler = true;
  },
  setTimeDisplay() {
    if (state.time >= 10) {
      state.display = "00:" + state.time;
    } else {
      state.display = "00:0" + state.time;
    }
  },
  timer() {
    setInterval(() => {
      if (state.time >= 0) {
        actions.setTimeDisplay();
        state.time--;
      } else {
        clearInterval();
        actions.gameStartDisplay();
      }
    }, 1000);
  },

  ballTimerCountdown() {
    let i = 5;
    let ball = 1;
    setInterval(() => {
      if (i > 0) {
        i--;
      } else {
        i = 5;
        ball += 1;
      }

      if (ball <= 8) {
        if (ball != 1) state.ballTimer = "00:" + "0" + i;
      } else {
        state.ballTimer = null;
        clearInterval();
      }
    }, 1000);
  },
  endingCountdown() {
    let i = 4;
    setInterval(() => {
      state.endTimer = "00:0" + i;
      i--;
    }, 1000);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
