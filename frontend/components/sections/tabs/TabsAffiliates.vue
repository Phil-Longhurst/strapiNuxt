<template>
    <div class="tabs-affiliates">
        <div class="container jsb">
            <div class="tabs-affiliates__title ae">
                <h1>{{ this.blockData.title }}</h1>
                <p>{{ this.blockData.caption }}</p>
            </div>
            <!-- slider -->
            <SliderAffiliates :images="this.blockData.Affiliates" />
            <!-- img btns -->
            <div v-for="(item, index) in this.blockData.Affiliates"
                :key="index" @click="showContent(index)"
                class="tabs-affiliates__buttons"
                :style="indexContent === index ? 'box-shadow: 0px 0px 20px 6px rgb(0 0 0 / 7%);' : null"
            >
                    <img 
                        :src="$store.state.apiroute.url + item.image.data.attributes.url" 
                    />
            </div>
            <!-- content  -->
            <div class="tabs-affiliates__content">
                <transition name="fade" appear>
                <div v-for="(item, index) in this.blockData.Affiliates" >
                    <div class="tabs-affiliates__content__text">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.caption }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                    <BtnOne v-if="item.url"
                        :link="item.url"
                        text="Discover more"
                    />
                </div>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>
import VueMarkdown from 'vue-markdown';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
    name: "TabsAffiliates",
    props: {
        blockData: Object,
    },
    data(){
        return {
            indexContent: 0,
            data: null,
            clicked: null
        }
    },
    methods: {
        showContent(index) {
            this.clicked = false
            this.indexContent = index
            this.clicked = true
        }
    },
    mounted() {
        console.log('about page', this.blockData);
        // animation for fade in up
        gsap.utils.toArray(".tabs-affiliates__buttons, .tabs-affiliates__content").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });

        ScrollTrigger.batch(".tabs-affiliates__buttons, .tabs-affiliates__content", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 4]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".tabs-affiliates__buttons, .tabs-affiliates__content", {y: 0}));
    },
}
</script>


