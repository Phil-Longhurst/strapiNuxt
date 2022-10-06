<template>
    <div class="quote">
        <div class="container">
            <h1>aaxsaxxaxa</h1>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'Quotes',
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


