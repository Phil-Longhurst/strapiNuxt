<template>
   <div 
        :class="[
            'collection-archive',
            this.theme ? 'light' : 'dark'
        ]">
        <div class="container ac jsb">
            <div class="all-posts">all posts</div>
            <div class="collection-archive__theme">
                <button 
                class="btn-one"
                @click="this.theme = !this.theme"
                >
                    theme
                </button>
            </div>

        </div>
        <div class="container jsb">
            <CollectionColumn 
                v-for="(item, index) in this.blockData.columns" 
                :key="index" 
                :col="item"/>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
// console.log(this.theme)
export default {
    name: 'CollectionArchive',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
        col: Object,
    }, 
}
</script>


