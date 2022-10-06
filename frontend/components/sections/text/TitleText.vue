<template>
    <div class="title-text">
        <div :class="[
                blockData.textRight ? 'row-reverse' : '',
                'container jsb' ]">

            <!-- img -->
            <img 
                class="title-text__img"
                v-if="blockData.image.data"  
                :alt="blockData.image.data.attributes.alternativeText"
                :src="$store.state.apiroute.url + blockData.image.data.attributes.url"
            />
            
            <!-- video -->
            <div 
                class="title-text__video"
                v-if="blockData.video.data" >
                <video 
                    ref="videoBlog"
                    :played="played"
                    @click="playPause(); played = !played">
                    <source 
                    :src="$store.state.apiroute.url + blockData.video.data.attributes.url"
                    :alt="blockData.video.data.attributes.alternativeText"
                    type="video/mp4">
                </video>
                <div 
                    class="title-text__video__play"
                    @click="playPause(); played = !played">
                    <!-- video playbtn -->
                    <PlayBtn 
                        :played="this.played"
                        ref="btn"
                        v-bind:class="{hide : !played}"/>
                </div>
            </div>

            <!-- slider -->
            <SliderWork 
                v-if="blockData.slides.data"
                :images="blockData.slides.data"
            />
            
            <!-- text -->
            <div :class="[
                    blockData.image.data ? 'width' : '',
                    blockData.video.data ? 'width' : '',
                    blockData.slides.data ? 'width' : '',
                    'title-text__wrapper'
                ]">
                <p class="title-text__wrapper__tag">{{ blockData.tag }}</p>
                <div class="title-text__wrapper__content">
                    <p class="s1">{{ blockData.title }}</p>
                    <p>{{ blockData.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'TitleText',
    props: {
        blockData: Object,
        played: false
    },
    data(){
        return {

        }
    },
    methods: {
        playPause() { 
            if (this.$refs.videoBlog.paused) 
            this.$refs.videoBlog.play();
            else 
            this.$refs.videoBlog.pause(); 
        }
    },
     mounted() {
        // animation for fade in up
        gsap.utils.toArray(".title-text__wrapper, .title-text__video, .title-text__img, .slider-work img").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });

        ScrollTrigger.batch(".title-text__wrapper, .title-text__video, .title-text__img, .slider-work img", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".title-text__wrapper, .title-text__video, .title-text__img, .slider-work img", {y: 0}));
    },
}
</script>


