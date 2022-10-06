<template>
    <div class="our-work">
    <!-- title -->
    <div 
        class="half-color"
        v-if="blockData.divider" 
    >
    </div>
        <!-- title -->
        <div 
            v-if="blockData.title" 
            :class="[
                blockData.titleRight ? 'ae' : '',
                'container flex-col our-work__title'
            ]">
            <p class="our-work__caption">{{ blockData.caption }}</p>
            <h1>{{ blockData.title }}</h1>
        </div>
        <!-- cards -->
        <div class="container jsb">
            <WorkColumn 
                v-for="(item, index) in this.blockData.works.data" 
                :key="index"
                :countIndex="index"  
                :url="this.$store.state.apiroute.local + '/work/' + item.attributes.slug"
                :img="item.attributes.featuredImage.data.attributes.url"
                :title="item.attributes.title"
                :tags="item.attributes.types"
                :video="item.attributes.video"
                :alt="item.attributes.featuredImage.data.attributes.alternativeText"
                archive="/work"
                category="type/"
                />
        </div>
        <!-- btn -->
        <div class="container center"> 
            <BtnOne :text="blockData.btn" :url="this.$store.state.apiroute.local + '/work'"/>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'OurWork',
    props: {
        blockData: Array,
    },
    data(){
        return {
        }
    },
    mounted() {
        console.log("this works daa", this.blockData.works)
    }
}
</script>


