<template>
    <div class="quote">
        <div class="container">
            <p class="s1">{{ blockData.title }}</p>
            <img :src="this.$store.state.apiroute.url + blockData.image.data.attributes.url" />
            <p class="s1">{{ blockData.subTitle }}</p>
            <p>{{ blockData.caption }}</p>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'Quote',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
        col: Object,
    }, 
    data(){
        return {

        }
    },
}
</script>


