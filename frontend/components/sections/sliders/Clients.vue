<template>
    <div
        class='clients' :style="blockData.black_background ? 'background-color: black' : null"> 
        <div class="container ae jsb">
            <div id="clients__title" class="clients__title" :style="blockData.black_background ? 'color: white' : null">
                <h1>{{ blockData.title }}</h1>
                <p class="s2">{{ blockData.caption }}</p>
            </div>
            <SliderClients :images="blockData.slider_image.data" />  
        </div>
    </div>
</template>

<script>

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Clients",
    methods: { 
        
    },
    props: {
        title: "",
        caption: "",
        blockData: Object
    },
    mounted() {
        console.log("this clients", this.blockData)
        console.log("this title", this.title)
        gsap.from("#clients__title", {
            opacity: 0, 
            x: -300, 
            duration: 1,
            scrollTrigger: {
                trigger: "#clients__title",
                start: "top center",
            },
        });
        console.log('this', this.Clients)
    },
}
</script>


