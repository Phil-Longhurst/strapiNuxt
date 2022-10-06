<template>
    <div class="slider-clients">
        <VueSlickCarousel v-bind="settings" v-if="images.length">
         <div v-for="item in images">
            <div class="slider-clients__img">
                <img :src="$store.state.apiroute.url + item.attributes.url"/>
            </div>
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
    name: 'SliderClients',
    components: { VueSlickCarousel },
    props: {
        images: Array,
    },
    data(){
        return {
            settings:  {
                "dots": false,
                "infinite": true,
                "autoplay": true,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "arrows": false,
                "variableWidth": true,
                // "centerMode": true,
                "autoplaySpeed": 0,
                "speed": 4000,
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


