<template>
    <div class="ticket">
        <p>
            Ticket ID:
            <strong>#{{id}}</strong>
            <br/>These are the numbers that have been generated for you:
        </p>
        <div class="balls">
            <Ball :num="combination[0]"/>
            <Ball :num="combination[1]"/>
            <Ball :num="combination[2]"/>
            <Ball :num="combination[3]"/>
            <Ball :num="combination[4]"/>
            <Ball :num="combination[5]"/>
            <Ball :num="combination[6]"/>
            <Ball :num="combination[7]"/>
        </div>
    </div>
</template>

<script>
    import Ball from "./../components/Main/Elements/Ball.vue";

    export default {
        name: "Ticket",
        components: {
            Ball
        },
        data() {
            return {
                id: "",
                combination: []
            };
        },
        methods: {
            getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
        },
        created() {
            this.id = this.getParameterByName('id', location.href);

            for (let i = 1; i <= 8; i++) { // good code is poem
                this.combination.push(this.getParameterByName(`num${i}`, location.href))
            }
        }
    };
</script>

<style scoped>
    p {
        margin-top: 0.5em;
        margin-left: 1em;
        color: #ef424c;
        font-size: 1.4em;
    }

    .ticket {
        margin: 20px;
        border-radius: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        background: #f8f0ee;
    }

    .balls {
        display: flex;
        flex-direction: row;
    }
</style>