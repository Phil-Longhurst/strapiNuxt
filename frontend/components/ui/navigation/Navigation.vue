<template>
    <nav class="navigation">
        <div :class="[
                item.hasChildren ? 'hasChildren' : '',
                ''
            ]"
        v-for="(item, index) in nav" :key="index" >
            <div class="navigation__item">
                <p v-if="showNumbers">0{{index + 1}}</p>
                <nuxt-link :to="item.href">{{item.page}}</nuxt-link>
                <Chevron v-if="item.hasChildren"/>
            </div>
            <div v-if="item.hasChildren" class="navigation__item__dropdown">
                <div v-for="link in item.SubLink" class="navigation__item__dropdown__child">
                    <nuxt-link :to="link.slug">{{link.page}}</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        nav: Array,
        showNumbers: Boolean,
    },
    data() {
        return {
        };
    },
    methods: {
    },
}
</script>