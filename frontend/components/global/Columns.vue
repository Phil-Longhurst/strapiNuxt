<template>
    <ul class="columns">
        <nuxt-link v-if="external == false"
            v-for="(item, index) in links" :key="index" 
            :to="item.link">
            <li>{{item.text}}</li>
        </nuxt-link>
        <a v-if="external == true"
            v-for="(item, index) in links" :key="index" 
            :href="item.link">
            <li>{{item.text}}</li>
        </a>
    </ul>
</template>

<script>
export default {
    name: "Columns",
    props: {
        links: Array,
        external: Boolean
    },
    data() {
        return {};
    },
    methods: {
    },
    computed: {
    },
}
</script>


