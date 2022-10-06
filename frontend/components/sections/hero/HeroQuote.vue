<template>
    <div 
        class="hero-quote"
        :style="{
        'background-image': this.$store.state.apiroute.url + blockData.image.data.attributes.url,
    }">
        <div class="hero-quote__overlay"></div>
        <div class="container center flex-col center">
            <h1>{{ blockData.title }}</h1>
            <p>{{ blockData.caption }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeroQuote',
    props: {
        blockData: Object,
    },
    data(){
        return {

        }
    },
    methods: {
    }
}
</script>


