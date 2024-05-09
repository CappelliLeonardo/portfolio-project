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
        <ul class=" list-unstyled">
            <li>
                <router-link :to="{name:'Home'}" >Home</router-link>
            </li>
            <li>
                <router-link :to="{name:'About'}" >About</router-link>
            </li>
            <li>
                <router-link :to="{name:'Contact'}" >Contact</router-link>
            </li>
            <li>
                <router-link :to="{name:'Projects'}" >Projects</router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
</style>
