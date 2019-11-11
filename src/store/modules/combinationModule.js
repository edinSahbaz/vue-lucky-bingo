const state = {
  lastNum: "",
  combination: []
};

const getters = {
  get_lastNum: state => state.lastNum,
  get_Combination: state => state.combination
};

const actions = {
  generateCombination() {
    for (let i = 0; i < 8; i++) {
      let randNum = Math.ceil(Math.random() * 100);

      if (!state.combination.includes(randNum)) {
        state.combination[i] = randNum;
      } else {
        i--;
      }
    }
    actions.showNum();
  },
  showNum() {
    let i = 0;
    setInterval(() => {
      if (i < 8) {
        state.lastNum = state.combination[i];
        i++;
      } else {
        clearInterval();
      }
    }, 10000);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
