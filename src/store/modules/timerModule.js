const state = {
  time: 9,
  display: "01:00",
  buttonDisabler: false
};

const getters = {
  get_display: state => state.display,
  get_buttonState: state => state.buttonDisabler
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
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
