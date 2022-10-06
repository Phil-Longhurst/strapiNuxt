<template>
    <div class="slider-services-mobile">
        <VueSlickCarousel v-bind="settings">
                <div v-for="(item, index) in card" :key="index">
                    <div class="slider-services-mobile__item">
                        <p :style="'--backgroundDot:' + colorsDot[index]  + ';'">{{item.title}}</p>
                        <div class="slider-services-mobile__item__info">
                            <div class="image-container" :style="'background-image: url(' + $store.state.apiroute.url + item.image.data.attributes.url + ');'"></div>
                            <ul>
                                <li v-for="(list, index) in item.list" :key="index">{{list.text}}</li>
                            </ul>
                        </div>
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
    name: 'SliderServicesMobile',
    components: { VueSlickCarousel },
    props: {
        card: Array
    },
    data(){
        return {
            settings:  {
                "dots": true,
                "infinite": true,
                "speed": 200,
                // "autoplay": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows": false,
                "useTransform": true,
                "variableWidth": true,
                "centerMode": true,
            },
            colorsDot: ['#00AAFF', '#FF0000', '#F0B400', '#000000', '#000000']
        }
    },
}
</script>


