//Ovdje sam samo one fukcije uzeo i onda sam skonto da prekomplikovane bzvz tako da sam
//sad skratio na ovo i ovaj modul upravlja timerom

const state = {
  time: 9,
  display: "01:00"
};

const getters = {
  get_display: state => state.display
};

const actions = {
  gameStartDisplay() {
    state.display = null;
    //Ovdje treba dodat neki prikaz kad krene igra nesto eto da blica il sjz haha
    //Skontat cemo to kasnije,jer je nebitna stvar...
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
