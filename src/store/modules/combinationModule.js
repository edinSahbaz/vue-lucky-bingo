const state = {
  lastNum: "",
  combination: [],
  userCombinations: [],
  tempId: 0,
  tickets: [],
  winnerCombination: {
    id: "",
    winnerComb: []
  },
  CorrectBalls: []
};

const getters = {
  get_lastNum: state => state.lastNum,
  get_Combination: state => state.combination,
  get_userCombinations: state => state.userCombinations,
  get_ticketId: state => state.tempId,
  get_winnerCombination: state => state.winnerCombination,
  get_CorrectBalls: state => state.CorrectBalls
};

const actions = {
  generateCombination() {
    for (let i = 0; i < 8; i++) {
      let randNum = Math.floor(Math.random() * 100);

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

    let ntrvl = setInterval(() => {
      if (i < 8) {
        state.lastNum = state.combination[i];
        i++;
      } else {
        clearInterval(ntrvl);
        this.findWinner();
      }
    }, 6000);
  },

  generateUserCombination({ commit }) {
    commit("increment");

    state.userCombinations.push({
      id: state.tempId,
      comb: []
    });

    state.userCombinations.forEach(e => {
      if (e.id === state.tempId) {
        for (let i = 0; i < 8; i++) {
          let randNum = Math.floor(Math.random() * 100);

          if (!e.comb.includes(randNum)) {
            e.comb[i] = randNum;
          } else {
            i--;
          }
        }
      }
    });
  },

  findWinner() {
    state.userCombinations.forEach(e => {
      e.correctCombs = 0;
      e.comb.forEach(combItem => {
        if (state.combination.includes(combItem)) {
          e.correctCombs++;
          state.CorrectBalls.push(true);
        } else {
          state.CorrectBalls.push(false);
        }
      });
    });

    let highestComb = -Infinity;
    let indexOfHighestComb = "";

    state.userCombinations.forEach((e, index) => {
      if (e.correctCombs > highestComb) {
        highestComb = e.correctCombs;
        indexOfHighestComb = index;
      }
    });

    state.winnerCombination.id = state.userCombinations[indexOfHighestComb].id;
    state.winnerCombination["winnerComb"] =
      state.userCombinations[indexOfHighestComb].comb;
  }
};

const mutations = {
  increment(state) {
    state.tempId++;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
