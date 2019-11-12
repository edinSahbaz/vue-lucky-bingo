const state = {
    lastNum: "",
    combination: [],
    userCombinations: [],
    tempId: 0,
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

    // user comb
    incrementToMutation({commit}) {
              commit('increment');
    },

    generateUserCombination() {
        state.userCombinations.push(
            {
                id: state.tempId,
                comb: []
            }
        );

        // Šaljem oblik u userCombination kao ovo gore
      // u nizu se redaju objekti s ovim gore propertijima
      // U ticket dostavljam komplet objekat
      // Moglo se napravit da uzima zadnju vrijednost ID iz
      // userCombination, al onda ćemo zaobić mutacije
      // i nećemo ono na naučit
      // s ovim dole cirkulišem kroz userCombinations i regenerišem
      // random kombinaciju, koja će bit dostupna u ticket.vue
      // a ipak će ostat u combinationModule.js KOJA nam može bit središnji
      // store za sve kombinacije..
      // eto, poderi kroz mutacije.. Bilo bi fino
      // piso sam što prostije.. da ga uradimo prvo prosto
      // pa ćemo se onda preseravat :D
      // Poy, sretno
      // (opet iskomentariši ko prošli put, bilo je top <3)

        state.userCombinations.forEach((e) => {
            if (e.id === state.tempId) {
              for (let i = 0; i < 8; i++) {
                let randNum = Math.floor(Math.random() * 100);

                if (!e.comb.includes(randNum)) {
                  e.comb[i] = randNum
                } else {
                  i--;
                }
              }
            }
        });
    }
};

const mutations = {
  increment (state) {
    state.tempId++;
  }
};

export default {
    state,
    getters,
    actions,
    mutations
};
