<template>
    <div class="text-columns">
        <div class="container flex-col">
            <p>{{ blockData.caption }}</p>
            <h1>{{ blockData.title }}</h1>
        </div>
        <div class="container jsb">
            <TextColumn v-for="(item, index) in this.blockData.columns" :key="index" :col="item" />
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'TextColumns',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
    },
    
    data(){
        return {

        }
    },

    methods: {
    }
}
</script>


