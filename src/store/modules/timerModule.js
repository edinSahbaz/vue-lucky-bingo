const state = {
  time: 60,
  display: "01:00"
};

const getters = {
  get_display: state => state.display
};

const actions = {
  gameStartDisplay() {
    state.display = "The Game has started!";

    setTimeout(() => {
      state.display = null;
    }, 3000);
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
