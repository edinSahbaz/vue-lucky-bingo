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
    get_ticketId: state => state.tempId
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
