<template>
    <div ref="wrapper" class="title-slider">
        <transition name="fade" appear>
                <div ref="boxes" class="boxes">
                    <div class="box" ref="box"><span>{{blockData.title}}</span></div>
                    <div class="box" ref="box"><span>{{blockData.title}}</span></div>
                    <div class="box" ref="box"><span>{{blockData.title}}</span></div>
                    <div class="box" ref="box"><span>{{blockData.title}}</span></div>
                    <div class="box" ref="box"><span>{{blockData.title}}</span></div>
                </div>
        </transition>
    </div>

</template>

<script>

import gsap from "gsap";

export default {
    name: 'TitleSlider',
    props: {
        blockData: Object
    },
    data(){
    },
    methods: {
    },
      mounted() {
        
        const { boxes } = this.$refs

        let row_width = boxes.getBoundingClientRect().width;
        let row_item_width = boxes.children[0].getBoundingClientRect().width;
        let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
        let x_translation = initial_offset * -1;

        gsap.set(boxes, {
            xPercent: `${initial_offset}`
        });

        var tl = gsap.timeline();

        tl.from(boxes, {
            ease: "none",
            duration: 60,
            xPercent: 0,
            repeat: -1,
        });

    }
}
</script>