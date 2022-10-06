<template>
    <button class="btn-two">
        {{ this.text }} 
    </button>
</template>

<script>

export default {
    name: 'BtnTwo',
    props: {
        text: String,
    },
    
    data(){
        return {

        }
    },

    methods: {
    }
}
</script>


