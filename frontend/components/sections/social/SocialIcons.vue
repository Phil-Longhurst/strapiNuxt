<template>
    <div 
        :class="[
            blockData.themeDark ? 'theme-dark' : '',
            'heading-basic'
        ]">
        <div 
            :class="[
                blockData.headingMiddle ? 'jc' : '',
                blockData.headingRight ? 'je' : '',
                'container'
            ]">
            <div class="heading-basic__text">
                <p v-if="blockData.caption">{{ blockData.caption }}</p>
                <h1>{{ blockData.title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'HeadingBasic',
    components: {
        VueMarkdown
    },
    props: {
        blockData: Array,
        col: Object,
    }, 
}
</script>


