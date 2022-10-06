<template>
    <div 
        :class="[
            blockData.themeDark ? 'theme-dark' : '',
            'text-img'
        ]">
        <div 
            :class="[
                blockData.textMiddle ? 'jc' : '',
                blockData.textRight ? 'row-reverse' : '',
                'container jsb'
            ]">
            <div class="text-img__text">
                <div class="text-img__text__tag">
                    <p>{{ blockData.tag }}</p>
                </div>
                <div 
                    class="text-img__text__content"
                    :style="[
                        blockData.textWide ? {'max-width' : '500px'} : ''   
                    ]">
                    <p class="s1">{{ blockData.title }}</p>
                    <p>{{ blockData.text }}</p>
                    <BtnOne 
                        v-if="blockData.btnText" 
                        :text="blockData.btnText"
                    />
                </div>
            </div>

            <div class="text-img__img">
            <!--    <img 
                    v-if="blockData.image.data && blockData.imageOffset" 
                    :class="[
                        blockData.textMiddle ? 'left' : 'right',
                        blockData.textRight ? 'unset' : 'right',
                        blockData.imageOffset ? 'offset' : '',
                    ]"
                    :alt="blockData.image.data.attributes.alternativeText"
                    :src="$store.state.apiroute.url + blockData.image.data.attributes.url" />   -->
                <img 
                    v-if="blockData.image.data"
                    :style="marginImage()"
                    :class="[

                        blockData.textMiddle ? 'left' : 'right',
                        blockData.textRight ? 'unset' : 'right',
                        blockData.imageOffset ? 'offset' : '',
                    ]"
                    :alt="blockData.image.data.attributes.alternativeText"
                    :src="$store.state.apiroute.url + blockData.image.data.attributes.url" />
            </div>

        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default {
    name: 'TextImg',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
    },
    data(){
        return {
        }
    },
    methods: {
       marginImage() {
           if(this.blockData.margin_bottom !== null) {
               return 'bottom: ' + this.blockData.margin_bottom + 'px'
           }
           if(this.blockData.margin_top !== null) {
               return 'top: ' + this.blockData.margin_top + 'px'
           }
       }
    },
    mounted() {
        // animation for fade in up
        gsap.utils.toArray(".text-img__text, .fadeIn").forEach((element, i) => {
            gsap.set(element, {opacity:0})
            gsap.from(element, {
                y: 200,
                scrollTrigger: {
                trigger: element,
                start: "top 100%"
                }
            });
        });
        ScrollTrigger.batch(".text-img__text, .fadeIn", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".text-img__text, .fadeIn", {y: 0}));

        const timline = gsap.timeline({repeat:-1, yoyo: true });
            /*Can Animation*/
                //move top left
            timline.to('.animate', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:"Power1.easeInOut"})
                //move down right
            timline.to('.offset', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:"Power1.easeInOut"})
            timline.to('.offset', 3, { y:'-=20',  rotation:'+=5', ease:"Power1.easeInOut"})
            timline.to('.offset', 3, { y:'+=20',  rotation:'+=5', ease:"Power1.easeInOut"})
            timline.to('.offset', 3, { y:'-=50', ease:"Power1.easeInOut"})
            timline.to('.offset', 3, { y:'+=50', ease:"Power1.easeInOut"})
            timline.to('.offset', 3, { y:'-=30', ease:"Power1.easeInOut"})
            timline.to('.offset', 3, { y:'+=30', ease:"Power1.easeInOut"})
            timline.to('.offset', 2, { y:'-=30', ease:"Power1.easeInOut"})
            timline.to('.offset', 2, { y:'+=30', ease:"Power1.easeInOut"})
    },
}
</script>


