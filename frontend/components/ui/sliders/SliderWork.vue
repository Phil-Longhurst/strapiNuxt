<template>
    <div class="slider-work">
        <VueSlickCarousel v-bind="settings">
         <div  v-for="item in images">
            <img :src="$store.state.apiroute.url + item.attributes.url"/>
         </div> 

        </VueSlickCarousel>
    </div>
</template>

<script>
  
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'SliderWork',
    components: { VueSlickCarousel },
    props: {
        images: Array,
    },
    data(){
        return {
            settings:  {
                "dots": true,
                "infinite": true,
                "autoplay": false,
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "arrows": true,
                // "variableWidth": true,
                "loop": true,
                "centerMode": true,
                "autoplay": true,
                "autoplaySpeed": 5000,
                "pauseOnHover": true
            }
        }
    },
    mounted() {
        console.log("images slider", this.images)
    }
}
</script>


