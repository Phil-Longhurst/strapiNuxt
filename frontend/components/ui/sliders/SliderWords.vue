<template>
    <div class="slider-words">
        <VueSlickCarousel v-bind="settings">
            <div><p>spjalla</p></div>
            <div><p>baterpapo</p></div>
            <div><p>Chiacchierare</p></div>
            <div><p>チャット</p></div>
            <div><p>povídat si</p></div>
            <div><p>charlar</p></div>
            <div><p>discorso</p></div>
            <div><p>Shalom</p></div>
            <div><p>Hello</p></div>
            <div><p>Bonjour</p></div>
            <div><p>Hola</p></div>
            <div><p>Ciao</p></div>
            <div><p>Hello</p></div>
            <div><p>Bonjour</p></div>
            <div><p>Hola</p></div>
            <div><p>Shalom</p></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'SliderWords',
    components: { VueSlickCarousel },
    data(){
        return {
            settings:  {
                // "lazyLoad": "ondemand",
                // "waitForAnimate": false,
                "slidesToShow": 8,
                "slidesToShow": 8,
                "slidesToScroll": 1,
                "dots": false,
                "infinite": true,
                "autoplay": true,   
                "arrows": false,
                "variableWidth": true,
                "autoplaySpeed": 0,
                "speed": 4000,
                "cssEase": "linear",
                "responsive": [{
                    "breakpoint": 1260,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 1,
                    }},
                    {
                    "breakpoint": 576,
                    "settings": {
                        "slidesToShow": 5,
                        "slidesToScroll": 1,
                    }},
                    {
                    "breakpoint": 550,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 1,
                    }}
                ]
            }
        }
    },
}
</script>


