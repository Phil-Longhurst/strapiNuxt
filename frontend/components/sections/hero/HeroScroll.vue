<template>
<div>
    <div class="hero-scroll">
            <!-- desktop -->
            <div class="wrapper">
                <StageLight /> 
                <section class="hero-scroll__panel hero-scroll__panel__first">
                  <!-- <div class="line"></div>
                    <StageLight /> -->
                    <div class="hero-scroll__title">
                    <!--  <OurMission /> -->
                        <h2>{{ this.blockData.title }}</h2>
                        <CenterLight /> 
                        <p>so far</p>
                    </div>
                    <div class="line"></div> 
                </section>
                <!-- text sections -->
                <section v-for="(item, index) in this.blockData.section" 
                        :class="[ index % 2 == 0 ? 
                        'even' : 'odd',
                        'hero-scroll__panel' ]">  
                    <div class="line-notch"></div> 
                    <div :class="['hero-scroll__panel__text', 'hero-scroll__panel__text-' + index]">
                        <p>{{ item.text }}</p>
                    </div>
                    <div class="line"></div> 
                </section>
                <!-- text sections -->
                <section class="hero-scroll__panel hero-scroll__panel__final">
                    <p>follow as the show continues...</p>
                </section> 
            </div>
           
            <!-- mobile -->
            <div class="wrapper-mob">
                <!-- <StageLightTwo /> -->
                <div class="hero-scroll__panel-mob hero-scroll__panel__first">
                    <div class="hero-scroll__title">
                    <!--  <OurMission /> -->
                        <h2>Our Mission</h2>
                        <div class="line-mob__circle"></div>
                        <CenterLight /> 
                        <p>so far</p>
                    </div>
                    <div class="line-dotted"></div> 
                </div>
                <!-- text sections -->
                <div v-for="(item, index) in this.blockData.section" 
                        :class="[ index % 2 == 0 ? 
                        'even' : 'odd',
                        'hero-scroll__panel-mob' ]">  
                    <div :class="['hero-scroll__panel__text-mob', 'hero-scroll__panel__text-' + index]">
                        <p>{{ item.text }}</p>
                    </div>
                    <div class="line-dotted"></div> 
                </div>
                <!-- text sections -->
                <div class="hero-scroll__panel-mob hero-scroll__panel__final">
                    <p>follow as the show continues...</p>
                </div> 
            </div>

    </div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import gsap from "gsap";
import TweenLite from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'HeroScroll',
    props: {
        blockData: Object,
    },
    mounted() {
        // horzontal scroll
        let tl = gsap.timeline();
        let scrollTween = gsap.to(".wrapper", {
            xPercent: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                pin: true,
                scrub: true,
                end: "+=3500"
            }
        });
        tl.add(scrollTween);

        // text anim in even
        // text anim in odd 
         gsap.utils.toArray(".odd .hero-scroll__panel__text").forEach((element, i) => {
           gsap.to(element, {
                y: -110,
                x: -10,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    containerAnimation: scrollTween,
                    start: "center 70%",
                    end: "center 60%",
                    scrub: true,
                }
            });
        });
        gsap.utils.toArray(".even .hero-scroll__panel__text").forEach((element, i) => {
           gsap.to(element, {
                y: 120,
                x: -10,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    containerAnimation: scrollTween,
                    start: "center 70%",
                    end: "center 60%",
                    scrub: true,
                }
            });
        });

        // end text anim 
         gsap.utils.toArray(".hero-scroll__panel__final p").forEach((element, i) => {
           gsap.to(element, {
                x: 0,
                y: 9,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-scroll__panel__final p",
                    containerAnimation: scrollTween,
                    start: "center 90%",
                    end: "center 70%",
                    scrub: true,
                }
            });
        });

          // title flicker anim 
           gsap.to(".hero-scroll__title h2, .CenterLight, .StageLight ", {
                keyframes: {
                    "0%": {opacity: 0.1},
                    "1%": {opacity: 0.9},
                    "5%": {opacity: 1},
                    "7%": {opacity: 0.5},
                    "15%": {opacity: 1},
                    "16%": {opacity: 0.3},
                    "20%": {opacity: 0.9},
                    "22%": {opacity: 0.7},
                    "30%": {opacity: 1},
                    "35%": {opacity: 1},
                    "50%": {opacity: 0.4},
                    "60%": {opacity: 1},
                    "64%": {opacity: 1},
                    "70%": {opacity: 0.2},
                    "85%": {opacity: 0.1},
                    "100%": {opacity: 1},
                },
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: ".hero-scroll__title h2, .CenterLight, .StageLight",
                    start: "center 70%",
                    end: "center 60%",
                    markers: true,
                }
            });

        // text line notch anim odd
        // text line notch anim even
        gsap.utils.toArray(".even .line-notch").forEach((element, i) => {
           gsap.to(element, {
                y: 20,
                x: -10,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    containerAnimation: scrollTween,
                    start: "center 80%",
                    end: "center 60%",
                    scrub: true,
                }
            });
        });

        gsap.utils.toArray(".odd .line-notch").forEach((element, i) => {
           gsap.to(element, {
                y: -15,
                x: -10,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    containerAnimation: scrollTween,
                    start: "center 80%",
                    end: "center 60%",
                    scrub: true,
                }
            });
        });
        
        // line draw anim
        gsap.utils.toArray(".line").forEach((element, i) => {
           gsap.to(element, {
                width: '100%',
                // duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    containerAnimation: scrollTween,
                    start: "center 40%",
                    end: "center 10%",
                    scrub: true,
                }
            });
        });

        gsap.utils.toArray(".line-mob, .line-dotted").forEach((element, i) => {
           gsap.to(element, {
                height: '17.5%',
                // duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    // containerAnimation: scrollTween,
                    start: "center 70%",
                    end: "center 50%",
                    scrub: true,
                }
            });
        });

         // animation for fade in up
        gsap.utils.toArray(".hero-scroll__panel__text-mob").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });
        
        ScrollTrigger.batch(".hero-scroll__panel__text-mob", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 4]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".hero-scroll__panel__text-mob", {y: 0}));

    }
}
</script>


