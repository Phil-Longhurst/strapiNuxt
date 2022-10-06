<template>
    <div class="text-column">
        <div v-if="this.col.tag" class="text-column__tag">
            <p>{{ this.col.tag }}</p>
        </div>
        <div class="text-column__content">
            <p class="s1">{{ this.col.title }}</p>
            <p>{{ this.col.text }}</p>
          <!--  <BtnOne text="View more"/> -->
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'TextColumn',
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


