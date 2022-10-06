<template>
    <div class="slider-heading-scroll">
        <VueSlickCarousel v-bind="settings">    
            <h1>Our Values</h1>
            <h1>Our Values</h1>
            <h1>Our Values</h1>
            <h1>Our Values</h1>
            <h1>Our Values</h1>
   
        </VueSlickCarousel>
    </div>
</template>

<script>
  
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'SliderClients',
    components: { VueSlickCarousel },
    props: {
        images: Array,
        titles: ""
    },
    data(){
        return {
            settings:  {
                "dots": false,
                "infinite": true,
                "autoplay": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows": false,
                "centerMode": true,
                "variableWidth": true,
                "autoplaySpeed": 0,
                "speed": 10000,
                "cssEase": "linear",
                "loop": true
            }
        }
    },
    mounted() {
        console.log("images slider", this.images)
    }
}
</script>


