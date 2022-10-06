<template>
    <div class="hero-work">
        <div class="container ac jsb">
            <!-- breadcrumb -->
            <div class="hero-work__breadcrumb">
                <p><nuxt-link to="/work">Work</nuxt-link><span>></span>{{ blockData.title }}</p>
            </div>

            <!-- text -->
            <div class="hero-work__text">
                <div class="hero-work__text__title">
                    <h3>{{ blockData.title }}</h3>
                    <!-- image mobile -->
                    <img 
                        class="hero-work__img-mob"
                        v-if="blockData.image" 
                        :alt="blockData.image.data.attributes.alternativeText"
                        :src="$store.state.apiroute.url + blockData.image.data.attributes.url" />
                    <p>{{ blockData.text }}</p>
                </div>

                <div class="hero-work__content">
                    <div>
                        <!-- industry -->
                        <p class="b3">Industry</p>
                        <div v-for="(item, index) in this.blockData.industry">
                            <p>{{ item.text }}</p>
                        </div>
                        <!-- involved -->
                        <p class="b3">Involved</p>
                        <div v-for="(item, index) in this.blockData.involved">
                            <p>{{ item.text }}</p>
                        </div>
                        <!-- visit -->
                        <p class="b3">Visit</p>
                        <div v-for="(item, index) in this.blockData.visit">
                            <p>{{ item.text }}</p>
                        </div>
                    </div>

                <!-- brief -->
                    <div>
                        <p class="s1">{{ blockData.subTitle }}</p>
                        <p>{{ blockData.subText }}</p>
                    </div>
                </div>
            </div>

            <!-- img desktop -->
            <img 
                class="hero-work__img-desk"
                v-if="blockData.image" 
                :alt="blockData.image.data.attributes.alternativeText"
                :src="$store.state.apiroute.url + blockData.image.data.attributes.url" />
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'HeroWork',
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
        gsap.utils.toArray(".hero-work__img-desk, .hero-work__text").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });

        ScrollTrigger.batch(".hero-work__img-desk, .hero-work__text", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".hero-work__img-desk, .hero-work__text", {y: 0}));
    },
}
</script>


