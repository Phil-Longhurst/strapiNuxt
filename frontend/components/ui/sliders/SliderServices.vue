<template>
    <div class="slider-services">
        <VueSlickCarousel v-bind="settings">
                <div v-for="(item, index) in card" :key="index" :ref="'title' + index" class="slider-services__item">
                    <img :src="$store.state.apiroute.url + item.image.data.attributes.url"/>
                        <div id="info" class="slider-services__item__info">
                            <p :style="'--backgroundDot:' + colorsDot[index]  + ';'" class="s1">{{item.title}}</p>
                            <ul>
                                <li v-for="(list, index) in item.list" :key="index">{{list.text}}</li>
                            </ul>
                            <BtnTwo text="View more"/>
                        </div>
                        <div class="slider-services__item__subtitle">
                            <p :style="'--backgroundDot:' + colorsDot[index]  + ';'" class="s1">{{item.title}}</p>
                        </div>
                </div>
                <template #customPaging="page">
                    <div class="custom-dot">   
                        {{ arrayOptions[page] }}  
                    </div>
                </template>
        </VueSlickCarousel>
    </div>
</template>

<script>

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);  
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'SliderServices',
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
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "arrows": false,
                "useTransform": true,
            },
            arrayOptions: [],
            colorsDot: ['#00AAFF', '#FF0000', '#F0B400', '#000000', '#000000']
        }
    },
    mounted() {
        this.card.forEach(element => this.arrayOptions.push(element.title));
    }
}
</script>


