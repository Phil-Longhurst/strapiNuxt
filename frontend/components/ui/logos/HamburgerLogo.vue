<template>
    <div class="hamburger-logo" @click="hamburgerClicked()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: "HamburgerLogo",
    props: {
    },
    data() {
        return {
        };
    },
    methods: {
        hamburgerClicked(){
            this.$emit('hamburgerClicked');
        }
    },
}
</script>