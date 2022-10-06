<template>
    <div class="header" :class="isActive ? 'aria-expanded' : null">
        <div ref="header" class="header__wrapper">
            <nuxt-link to="/"><img class="logo" :src="this.$store.state.apiroute.url + logoOnqorUrl" :alt="logoOnqorAlt"/></nuxt-link>
            <div class="header__wrapper__container">
                <Navigation :showNumbers="true" :nav="menu"/>
                <BtnTwo text="Book a call"/>
                <HamburgerLogo v-if="isActive === false" @hamburgerClicked="openHamburger($event)"/>
                <img v-if="isActive" class="close-icon" :src="this.$store.state.apiroute.url + closeIconUrl" :alt="closeIconAlt" @click="closeHamburger($event)"/>
            </div>
        </div>
    </div>
</template>

<script>

import gsap from "gsap";
import { TimelineLite, Back } from 'gsap' 

export default {
    name: "Header",
    props: {
    },
    data() {
        return {
            isActive: false,
            logoOnqorUrl: "",
            logoOnqorAlt: "",
            closeIconUrl: "",
            closeIconAlt: "",
            menu: Object,
            blockData: Array,
        };
    },
    methods: {
        openHamburger() {
            this.isActive = true;
        },
        closeHamburger() {
            this.isActive = false;
        },
        async asyncData() {
            const header = await fetch(this.$store.state.apiroute.url + "/api/header" + '?populate=deep,5'
            ).then((res) => {
                return res.json();
            });
            this.logoOnqorUrl = header.data.attributes.logo.data.attributes.url;
            this.logoOnqorAlt = header.data.attributes.logo.data.attributes.alternativeText;
            this.closeIconUrl = header.data.attributes.close_icon.data.attributes.url;
            this.closeIconAlt = header.data.attributes.close_icon.data.attributes.alternativeText;
            this.menu = header.data.attributes.menu;
            console.log('menu', this.menu);
        }
    },
    mounted() {
        this.asyncData();
        const url = this.$store.state.apiroute.local + "/";
        if (window.location.href === url) {
            const {header} = this.$refs
            gsap.set(header, {opacity: 0});

            var tl = gsap.timeline();

            tl.to(header, 3, {
                opacity: 1,
            }, '+=2' )
        }
    }
}
</script>


