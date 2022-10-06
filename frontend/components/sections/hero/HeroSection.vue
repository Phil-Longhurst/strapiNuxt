<template>
    <div class="hero">
        <!-- <div class="hero__light hero__light-left"></div> -->
        <!--  <div class="hero__light hero__light-right"></div> -->
        <div class="hero__container">
            <div ref="titleText" class="title-text">
               <p>{{blockData.title_text[0].title}}</p>
               <div class="sentence">
                    <div class="word-switcher">
                        <span v-for="(item, index) in blockData.word_switching" :class="'word word-' + (index + 1)">
                            {{item.word}}
                        </span>
                    </div>
                    <p>brands</p>
                </div>
               <p>{{blockData.title_text[2].title}}</p>
            </div>
            <TitleSlider :blockData="blockData"/>
            <div @click="playVideo()" @mouseover="mouseOver()" @mouseleave="mouseLeave()" ref="imageContainer" class="container-image">
              <img :style="hover || play ? 'z-index: -1' : null" :src="this.$store.state.apiroute.url + blockData.video.data[1].attributes.url" />
              <div class="video-container">
                    <video :style="hover ? 'z-index: 8' : null" ref="video" width="320" height="240" muted controls>
                        <source :src="this.$store.state.apiroute.url + blockData.video.data[0].attributes.url" type="video/mp4">
                    </video>
              </div>
              <div @click="playVideo()" :style="play ? 'display: none' : null" class="logo-play">
                   <LogoPlay />
              </div>
            </div>
            <!-- <div class="hero__light-middle"></div> -->
        </div>
        <ScrollMobile />
    </div>
</template>

<script>

import gsap from "gsap";
import { TimelineLite, Back } from 'gsap'

export default {
    name: 'HeroSection',
    props: {
        blockData: Object,
    },
    data(){
        return {
            i: 0,
            hover: false,
            play: false
        }
    },
    methods: {
        mouseOver() {
           if(window.innerWidth > 682 && this) {
                this.hover = true
                const { video } = this.$refs
                video.play();
           }
        },
        mouseLeave() {
           if(window.innerWidth > 682) {
                const { video } = this.$refs
                this.hover = false
                video.pause();
                video.currentTime = 0;
           }
        },
        playVideo() {
            if(window.innerWidth < 682) {
                const { video } = this.$refs
                this.play = true
                video.play();
           }
        }
    },
      mounted() {
        setInterval(() => {
            if (this.i < this.words.length-1) this.i++
            else this.i = 0
        },3000)

        const { titleText } = this.$refs
        const { imageContainer } = this.$refs
        const { wrapper } = this.$refs
        const timeline = new TimelineLite()
        
        timeline.to(titleText, 1, {
            x: 1000,
            opacity: 1,
            ease: Back.easeInOut, // Specify an ease
        })

        const tl = gsap.timeline({repeat:-1});

        timeline.from(imageContainer, 1, {
            x: 1372,
            opacity: 0,
            ease: Back.easeInOut, // Specify an ease
        }, '+=0.2' )
    }
}
</script>


