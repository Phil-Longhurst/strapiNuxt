<template>
    <div class="hero-service">
        <img :alt=" blockData.image.data.attributes.alternativeText" :src="'http://localhost:1337' + blockData.image.data.attributes.url" />
        <div class="hero-service__title" :style="'--departmentColor:' + blockData.color_department">
            <h1>{{ blockData.title }}</h1>
            <p>{{ blockData.text }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeroService',
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


