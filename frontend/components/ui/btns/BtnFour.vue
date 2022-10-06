<template>
    <button class="btn-four" :count="this.value">
        {{ this.text }} 
    </button>
</template>

<script>

export default {
    name: 'BtnFour',
    props: {
        text: String,
        url: String,
        value: String
    },
    
    data(){
        return {

        }
    },

    methods: {
     
    }
}
</script>


