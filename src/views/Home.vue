<template>
    <div class="home">
        <Landing/>
        <Particles/>
    </div>
</template>

<script>
    import Landing from "../components/Home/Landing.vue";
    import Particles from "../components/Home/Particles.vue";

    export default {
        name: 'home',
        components: {
            Landing,
            Particles
        }
    }
</script>
