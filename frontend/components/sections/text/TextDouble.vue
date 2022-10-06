<template>
    <div 
        class="text-double"
        :class="{ active: activated }"
        >
       <div 
           :class="[
            'container jsb',
            this.activated ? 'border-dark' : 'border-light'
        ]">
            <TextColumn 
             v-for="(item, index) in this.blockData.text" 
                :key="index" 
                :col="item" 
            />
            <div 
                v-if="this.blockData.linkedin"
                class="single-troupe__hero__social">
                <Linkedin />
                <p>Find me on <a target="_blank" :href="this.blockData.linkedin">LinkedIn</a> or feel free to <a :href="'mailto:' + this.blockData.email">email me</a></p>
            </div>
       </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'TextDouble',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
        activated: Boolean
    },
    mounted() {
        console.log('tester for active class', this.activated)
    }
}
</script>


