<template>
    <div class="slider-affiliates">
        <VueSlickCarousel v-bind="settings" v-if="images.length">
         <div class="slider-affiliates__item" v-for="item in images">
            <div class="slider-affiliates__item-item">
                <img :src="$store.state.apiroute.url + item.image.data.attributes.url"/>
                <div class="tabs-affiliates__content__text">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.caption }}</p>
                    <p>{{ item.text }}</p>
                </div>
                <BtnOne 
                text="Discover more"/>
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
    name: 'SliderAffiliates',
    components: { VueSlickCarousel },
    props: {
        images: Array,
    },
    data(){
        return {
            settings:  {
                "dots": true,
                "infinite": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "centerMode": true,
                "centerPadding": "30px",
                "cssEase": "linear",
                "loop": true,
                "responsive": [{
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 1,
                        "centerMode": false,
                    }},
                ]
            }
        }
    },
    mounted() {
        console.log("images slider", this.images)
    }
}
</script>


