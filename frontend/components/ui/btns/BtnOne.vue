<template>
    <nuxt-link :to="'/' + this.postType">
        <button class="btn-one">
            {{ this.text }} 
        </button>
    </nuxt-link>
</template>

<script>

export default {
    name: 'BtnOne',
    props: {
        text: String,
        postType: String
    },
    
    data(){
        return {

        }
    },

    methods: {
    }
}
</script>


