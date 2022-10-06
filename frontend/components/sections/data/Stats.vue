<template>
    <div class="stats">
        <div class="container">
            <div class="stats__row-one">
                <div class="stats__row-one__col-one"></div>
                <div class="stats__row-one__col-two"></div>
            </div>
            <div class="stats__row-two">
                <div class="stats__row-one__col-one"></div>
                <div class="stats__row-one__col-two"></div>
                <div class="stats__row-one__col-three"></div>
            </div>
            <div class="stats__row-three">
                <div class="stats__row-one__col-one"></div>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'Stats',
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


