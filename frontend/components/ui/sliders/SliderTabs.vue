<template>
    <div class="slider-tabs">
        <VueSlickCarousel v-bind="settings">
                <div v-for="(item, index) in data" :key="index">
                    <div class="slider-tabs__item">
                        <p>{{item.name}}</p>
                        <p>{{item.title}}</p>
                        <p>{{item.text}}</p>
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
    name: 'SliderTabs',
    components: { VueSlickCarousel },
    props: {
        data: Array
    },
    data(){
        return {
             settings:  {
                "dots": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
            },
        }
    },
    mounted() {
    }
}
</script>


