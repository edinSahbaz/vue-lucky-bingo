const state = {
    lastNum: "",
    combination: [],
    userCombinations: [],
    tempId: 0,
    tickets: [],
    winnerCombination: {
        id: "",
        winnerComb: []
    }
};

const getters = {
    get_lastNum: state => state.lastNum,
    get_Combination: state => state.combination,
    get_userCombinations: state => state.userCombinations,
    get_ticketId: state => state.tempId,
    get_winnerCombination: state => state.winnerCombination
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

    // user comb
    generateUserCombination({ commit }) {
        commit("increment");

        state.userCombinations.push(
            {
                id: state.tempId,
                comb: []
            }
        );

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
    },

    /*
    findWinner se aktivira nakon 6 sekundi nakon što se zaustavi tajmer na
    velkoj loptici, tj na krajnjem intervalu
    ti si počeo radit statemanagement i dodijeljivanje id i komb u Ticket.vue
    sto je u novom tabu i zbog toga ne moze pristupit ni globalnim varijablama
    ni mutacijama.. sve racuna pod resetom
    to je bio problem
    sve sam prebacio u Left.vue gdje šaljem preko GET sve info
    što je jedini način da komuniciram s novim tabom i pritom sve podatke
    o ID i kombinaciji sacuvam
    6 sekundi nakon kraja rokne ovu funkciju, prođe kroz sve userCombinations
    i upoređuje ko ima najviše tačnih kombinacija
    na kraju u middleBottom izvučem dobitnu kombinaciju
    (tačne brojeve možemo npr obojit drugom bojom)
    sad TODO:
    prebacit na onaj Ending screen sa infom kad se sve zavrsi
    onemogucit button na leftu nakon odredjenog vremena
    i ono npr pastavit kad pačne izvlačit brojeve da vrti i tu tajmere od po 5 sekundi
    i onda cemo se jebavat s animacijama i doradjivanjem
    ovo je suuuper :D (jbt kruh i novi tab, jedva sam se izvuko iz govana hahahaha)
    */

    findWinner() {
        state.userCombinations.forEach(e => {
            e.correctCombs = 0;
            e.comb.forEach(combItem => {
                if (state.combination.includes(combItem)) {
                    e.correctCombs++;
                }
            })
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
        state.winnerCombination["winnerComb"] = state.userCombinations[indexOfHighestComb].comb;
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
