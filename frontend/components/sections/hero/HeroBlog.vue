<template>
    <div class="hero-blog">
        <div class="container ac jsb">
            <!-- breadcrumb -->
            <div class="hero-blog__breadcrumb">
                <p><nuxt-link to="/blog"> Blog</nuxt-link><span>/</span>{{ blockData.title }}</p>
            </div>

            <!-- text -->
            <div class="hero-blog__text">
                <h3>{{ blockData.title }}</h3>
                <p class="hero-blog__text-desk">{{ blockData.text }}</p>
            </div>

            <!-- img -->
            <img 
                class="hero-blog__img"
                v-if="blockData.image" 
                :src="$store.state.apiroute.url + blockData.image.data.attributes.url" 
                :alt="blockData.image.data.attributes.alternativeText"
                
                />
            <p class="hero-blog__text-mob" >{{ blockData.text }}</p>

        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'HeroBlog',
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
        gsap.utils.toArray(".hero-blog__img, .hero-blog__text").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });

        ScrollTrigger.batch(".hero-blog__img, .hero-blog__text", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".hero-blog__img, .hero-blog__text", {y: 0}));
    },
}
</script>


