//Ovaj modul sam nap isklj za kombinacije.

//Imaju 2 "var" kombinacija(8 random br) i lastNum koji uzima novu vrijednost
//svakih 6s iz kombinacije.

//Nez et sta vise da ti napisem haha,kod je prilicno samoobjasnjiv :D

const state = {
  lastNum: "",
  combination: [],
  userCombinations: [],
  tempId: 1,
  tickets: []
};

const getters = {
  get_lastNum: state => state.lastNum,
  get_Combination: state => state.combination,
  get_userCombinations: state => state.userCombinations,
  get_TicketId: state => state.tempId
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
    setInterval(() => {
      if (i < 8) {
        state.lastNum = state.combination[i];
        i++;
      } else {
        clearInterval();
      }
    }, 6000);
  },

  //OVO JE ZA USER KOMBINACIJE

  generateUserCombination() {
    for (let i = 0; i < 8; i++) {
      let randNum = Math.floor(Math.random() * 100);

      if (!state.userCombinations.includes(randNum)) {
        state.userCombinations[i] = randNum;
      } else {
        i--;
      }
    }

    this.saveTicket();
  },
  saveTicket() {}
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
