<template>
    <div class="middleUpper">
        <div class="starterTimer">
            <span class="animated infinite fadeIn">{{display}}</span>
        </div>
        <div class="balls">
            <MainBall v-bind:num="ballRandomExcitementNumbers"/>
            <div class="strow">
                <BingoBall num="24"/>
                <BingoBall num="35"/>
                <BingoBall num="68"/>
                <BingoBall num="26"/>
            </div>
            <div class="ndrow">
                <BingoBall num="72"/>
                <BingoBall num="17"/>
                <BingoBall num="41"/>
                <BingoBall num="30"/>
            </div>
        </div>
    </div>
</template>

<script>
    import BingoBall from "./Elements/BingoBall";
    import MainBall from "./Elements/MainBall";
    // nažalost reko sam u 21:30
    // htio sam stavit da na main loptici nonstop baca random numbere
    // prvih 7 sekundi, a onda da nestane, međutim nepraktično je
    // i ne može vrtit random numbere osim svake sekunde kako i timer ide
    // (usrani single thread).. Bilo bi moćno stavit da na svakoj loptici sa strane
    // Mijenja numbere dok ne prođe 10 sekundi, a onda joj dodijelit broj i prestat smjenjivat
    // randome

    // Uveo sam ruter i iskomentariso template linije actiona i gettera
    // da se moš poslužit, fino bi bilo sad tu dobitnu kombinaciju propušovat
    // u state u vuexu
    // kao što vidiš uveo sam module timerMinute koji bi se mogo prenadit
    // volio bih da on bude ono glafni, da nam index.js ostane čist
    // nisam tolko puno uradio, otkrivo sam usput vuex i pravo je moćan
    // rastavio sam tvoj kod na zasebne funkcije
    // kad završiš napiši mi da si završio i ovdje ostavi log ko ja, ak ti štima :D
    // sretno, poy

    // import {mapGetters} from 'vuex';

    export default {
        name: "middleUpper",
        computed: {
            // ...mapGetters([
            //     'get_startTimeValue',
            //     'get_clockString'
            // ])
        },
        components: {
            BingoBall,
            MainBall
        },
        data() {
            return {
                winnerCombination: [],
                ballRandomExcitementNumbers: "",
                countDown: 60,
                display: "01:00"
            };
        },
        methods: {
          // ...mapActions(["newTimer"]),
            removeDisplay() {
                this.display = "";
            },
            timer() {
                if (this.countDown >= 0) {
                    this.recursiveOrEnd();
                }
            },
            displayChange() {
                if (this.countDown > 9) {
                    this.display = "00:" + this.countDown;
                } else {
                    this.display = "00:" + "0" + this.countDown;
                }
            },
            recursiveOrEnd() {
                setTimeout(() => {
                    this.countDown -= 1;
                    if (this.countDown === 0) {
                        this.display = "The Game has started!";
                        setTimeout(this.removeDisplay, 3000);
                        this.makeWinnerCombination();
                    } else {
                        this.timer();
                        this.displayChange();
                    }
                }, 1000);
            },
            randomLegalNumber() {
                return Math.floor(Math.random() * 100) + 1;
            },
            makeWinnerCombination() {
                for (let i = 0; i < 8; i++) {
                    this.winnerCombination.push(this.randomLegalNumber());
                }
            }
        },
        mounted() {
            setTimeout(this.timer, 2500);
        }
    };
</script>

<style scoped>
    @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

    .middleUpper {
        display: grid;
        grid-area: middleUpper;
        grid-template-rows: 0.3fr 1.7fr;
    }

    .starterTimer {
        font-size: 3em;
        padding-left: 0.5em;
        padding-top: 0.2em;
    }

    .balls {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .strow {
        display: flex;
        flex-direction: column;
        padding: 1em;
        margin: 1em;
    }

    .ndrow {
        display: flex;
        flex-direction: column;
    }
</style>