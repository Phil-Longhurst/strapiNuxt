<template>
    <div class='heading-scroll'> 
        <SliderHeading :titles="this.title" />  
    </div>
</template>

<script>

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "HeadingScroll",
    methods: { 
        
    },
    props: {
        title: "",
    },
    mounted() {
        console.log("this clients", this.client)
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


