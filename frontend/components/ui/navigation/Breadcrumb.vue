<template>
    <div class="archive__breadcrumb">
        <p><a :href="this.$store.state.apiroute.local + '/blog'">Troupe</a><span>></span>anna</p>
    </div>
</template>

<script>

export default {
    name: 'Breadcrumb',
    props: {
        blockData: Object,
    },
    data(){
        return {

        }
    },
    methods: {
    }
}
</script>


