<template>
    <VueSlickCarousel v-bind="settings" v-if="sliderSlides">
        <WorkColumn 
                v-for="(item, index) in this.sliderSlides" 
                v-if="item.attributes.departments.data[0].attributes.name == dep"
                :key="index"
                :countIndex="index"  
                :url="item.attributes.slug"
                :img="item.attributes.image.data.attributes.url"
                :title="item.attributes.name" 
                :excerpt="item.attributes.role"
                archiveName="troupe"
                :dept="item.attributes.departments.data[0].attributes.name"
                category=""
        />
    </VueSlickCarousel>
</template>

<script>
  
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'SliderTroupe',
    components: { VueSlickCarousel },
    props: {
        sliderSlides: Array,
        dep: String
    },
    data(){
        return {
            settings:  {
                "dots": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "centerMode": true,
                "arrows": false,
                "centerMode": true,
                "loop": true,
                responsive: [
                    {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        }
                    },
                    {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        }
                    },
                    {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                         "centerMode": false,
                        }
                    }
                ]
            }
        }
    },
    mounted() {
        console.log('slides.data', this.sliderSlides)
    }
}
</script>


