//Ovaj modul sam nap isklj za kombinacije.

//Imaju 2 "var" kombinacija(8 random br) i lastNum koji uzima novu vrijednost
//svakih 6s iz kombinacije.

//Nez et sta vise da ti napisem haha,kod je prilicno samoobjasnjiv :D

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
    }, 6000);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
