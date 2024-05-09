<script>
import gsap from "gsap";
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {
        gsap.to(".animation", { duration: 1, x: 400 });
    },
}
</script>

<template>
    <header class="animation">
        HEADER
    </header>
</template>

<style lang="scss" scoped>
</style>
