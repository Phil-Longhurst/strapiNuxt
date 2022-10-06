<template>
    <div class="work-column" ref="mySpan" :index="countIndex" :department="this.dept">
            <nuxt-link :to="this.theLink" >
            <div @mouseover="mouseOver()" 
                 @mouseleave="mouseLeave()" 
                 class="work-column__image-container">
                <img
                    :style="hover ? 'z-index: -1' : null" 
                    :src="$store.state.apiroute.url + this.img"
                    :alt="this.alt"
                />
                <div v-if="video" class="video-container">
                    <video :style="hover ? 'z-index: 8' : null" ref="video" width="320" height="240" muted controls>
                        <source :src="this.$store.state.apiroute.url + video.data.attributes.url" type="video/mp4">
                    </video>
                </div>
            </div>
            <p class="s1">{{ this.title }}</p>
           <!-- <p v-if="this.excerpt">{{ this.excerpt }}</p> -->
            <div class="work-column__tags" v-if="tags">
                <p  v-for="(item, index) in this.tags.data">
                   {{ item.attributes.name }}<span> /&nbsp </span>
                </p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'WorkColumn',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
        countIndex: Number,
        url: String,
        img: String,
        title: String,
        excerpt: String,
        alt: String,
        tags: Object,
        urlCat: Array,
        archiveName: String,
        category: String,
        video: Object,
        dept: String
    }, 
    data(){
        return {
            isActive: "",
            theLink: '',
            hover: false,
            deparment: '',
        }
    },

    methods: {
        mouseOver() {
           if(window.innerWidth > 682 && this.video) {
                this.hover = true
                const { video } = this.$refs
                video.play();
           }
        },
        mouseLeave() {
           if(window.innerWidth > 682 && this.video) {
                const { video } = this.$refs
                this.hover = false
                video.pause();
                video.currentTime = 0;
           }
        },
    },

    mounted() {
        this.deparment = this.dept
        // animation for fade in up
        gsap.utils.toArray(".work-column").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });
        
        ScrollTrigger.batch(".work-column", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 4]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".work-column", {y: 0}));

        // if link
        var currentUrl = window.location.pathname;
        if (this.category == "") {
            this.theLink = '/' + this.archiveName + '/' + this.url
        } else if (currentUrl.includes(this.category)) {
            this.theLink = this.url
        } else {
            this.theLink = '/' + this.archiveName + '/' + this.category + this.url
        }

        console.log(this.video)
    },
}
</script>


