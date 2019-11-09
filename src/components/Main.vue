<template>
    <div class="main">
        <Left/>
        <middleUpper/>
        <middleBottom/>
        <Right/>
    </div>
</template>

<script>
    import Left from "./Main/Left";
    import middleUpper from "./Main/middleUpper";
    import middleBottom from "./Main/middleBottom";
    import Right from "./Main/Right";

    export default {
        name: "Main",
        components: {
            Left,
            middleUpper,
            middleBottom,
            Right
        }
    }
</script>

<style scoped>
    .main {
        display: grid;
        grid-template-rows: 65vh 35vh;
        grid-template-columns: 20% 60% 20%;
        grid-template-areas: "left middleUpper right"
                              "left middleBottom right";
        color: #F8F0EE;
    }
</style>