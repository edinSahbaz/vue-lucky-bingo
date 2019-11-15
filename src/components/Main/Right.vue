<template>
    <div class="right">
        <div class="manual">
            <h1>Manual</h1>
            <span>Grab your tickets before the timer hits 00:00.</span>
            <span>On your ticket, you will see</span>
            <span>combination of 8 numbers and ID of your ticket.</span>
            <span>You can't make new tickets when the timer hits 00:00.</span>
            <span>New timer arrives and every 6 seconds new number will be generated.</span>
            <span>Our bingo will create a combination of 8 different numbers.</span>
            <span>On screen you will see which ticket has the highest hits.</span>
            <span>Ticket with most hits is a winner.</span>
            <span>If you are lucky enough and you guess all of eight numbers, you scored Bingo.</span>
            <span>Good luck!</span>
        </div>
        <div class="authors">
            <font-awesome-icon :icon="['fab', 'github']" />
            <button id="authInfo" @click="showAuthors">Credits</button>
        </div>
    </div>
</template>

<script>
    // ev samo dodo ovo prosto
    // glupo mi installovat font awesome za vue za 1 github ikonicu
    // al doduse nije mi tolko ni glupo kolko neam sad volje
    // et.. sutra ću hard hustle, dns je kita dan haha

    // .. nisam mogo odolit
    // HAHAHAHA
    // importovo sam github ikonicu, al je veoma jeben problem je u popup prikazat
    // msm da ces vjerovatno zaobic popup tj. da bude github u popup-u
    // et, princip od font-awesome usranog package-a skontan yeah (main.js i right.vue)
    // poyz, sretno hehe
    // već smo počeli komplikovat
    // ostavljaj vak komentarcice da moremo što dalje otic hehe

    import Swal from 'sweetalert2';

    export default {
        name: "Right",
        methods: {
            showAuthors() {
                Swal.fire({
                        title: 'Authors',
                        html: "<span>Kenan Sejmenović</span><br><span>Edin Šahbaz</span>",
                        icon: 'info',
                    confirmButtonColor: '#41B883',
                    confirmButtonText: 'Great work!',
                    }
                )
            }
        }
    };
</script>

<style scoped>
    .right {
        grid-area: right;
        border-left: 4px dotted #f8f0ee;
    }

    .manual {
        margin: 10% 5%;
        line-height: 1.6;
    }

    .manual h1 {
        margin-bottom: 5px;
    }

    .manual span {
        display: block;
        font-size: 16px;
    }

    .authors {
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #authInfo {
        padding: 10px 20px;
        border-radius: 15%;
        outline: none;
        border: 2px solid #f8f0ee;
        background-color: #2d3440;
        color: #f8f0ee;
        font-size: 20px;
        cursor: pointer;
        transition: 0.4s;
    }

    #authInfo:hover {
        background-color: #383f4d;
    }
</style>