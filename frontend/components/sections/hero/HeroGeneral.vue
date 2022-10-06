<template>
    <div class="hero-general">

        <!-- text -->
        <div class="container ac jsb">
            <div class="hero-general__title">
                <p class="hero-general__title-desk">our</p>
                <h1>{{ blockData.title }}</h1>
            </div>
            <p class="hero-general__text">{{ blockData.text }}</p>
        <!-- img-->
               <img 
                class="hero-general__img"
                v-if="blockData.image" 
                :src="$store.state.apiroute.url + blockData.image.data.attributes.url" 
                :alt="blockData.image.data.attributes.alternativeText"
                />
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'HeroGeneral',
    props: {
        blockData: Object,
    },
    data(){
        return {

        }
    },
    methods: {
    },
     mounted() {
        // animation for fade in up
        gsap.utils.toArray(".hero-general__img, .hero-general__text").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });

        ScrollTrigger.batch(".hero-general__img, .hero-general__text", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".hero-general__img, .hero-general__text", {y: 0}));
    },
}
</script>


