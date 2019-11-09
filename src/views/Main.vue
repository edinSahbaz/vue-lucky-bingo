<template>
    <div class="main">
        <Left />
        <middleUpper />
        <middleBottom />
        <Right />
    </div>
</template>

<script>
    import Left from "../components/Main/Left";
    import middleUpper from "../components/Main/middleUpper";
    import middleBottom from "../components/Main/middleBottom";
    import Right from "../components/Main/Right";

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
        grid-template-areas:
                "left middleUpper right"
                "left middleBottom right";
        color: #f8f0ee;
        background: #2d3440;
    }
</style>