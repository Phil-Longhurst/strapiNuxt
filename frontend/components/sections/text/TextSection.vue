<template>
    <div class="text-section">
        <div class="container center">
            <vue-markdown :source="blockData.content" />
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'TextSection',
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


