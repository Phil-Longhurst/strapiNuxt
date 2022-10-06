<template>
    <div class="tabs">
        <div class="container">
            <p class="s1">{{ blockData.title }}</p>
        </div>
        <div class="container jsb">
            <!-- buttons -->
            <div class="tabs__buttons">
                <div 
                    class="tabs__buttons__item"
                    v-for="(item, index) in this.blockData.tab" 
                    :style="indexContent === index ? 'box-shadow: 0px 0px 20px 6px rgb(0 0 0 / 7%);' : null"
                    :key="index" @click="showContent(index)">
                    <img :src="$store.state.apiroute.url + item.image.data.attributes.url"/>
                    <div>
                        <p class="s3">{{ item.name }}</p>
                        <p class="s3">{{ item.caption }}</p>
                     </div>
                </div>
            </div>
            <!-- content -->
            <div class="tabs__content"> 
                <div class="tabs__content__item">
                    <p class="s2">{{ blockData.tab[indexContent].title }}</p>
                    <p>{{ blockData.tab[indexContent].subTitle }}</p>
                    <p>{{ blockData.tab[indexContent].text }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "TabsHorozontal",
    props: {
        blockData: Object,
    },
    data(){
        return {
            indexContent: 0,
            data: null
        }
    },
    methods: {
        showContent(index) {
            this.indexContent = index
        }
    },
    mounted() {
        console.log("this is the data that i llolk" + blockData)
    }
}
</script>


