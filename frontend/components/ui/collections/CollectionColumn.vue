<template>
    <div class="collection-column">
        <img :src="this.col.title"/>
        <p class="s3">{{ this.col.title }}</p>
        <p>{{ this.col.sub }}</p>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'CollectionColumn',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
        col: Object,
    }, 
}
</script>


