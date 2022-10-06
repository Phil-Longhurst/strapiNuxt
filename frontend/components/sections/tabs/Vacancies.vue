<template>
    <div class="vacancies tabs">
        <div class="border-light">
        <div class="container padding-top">
        <p>Our</p>
            <h1 class="s1">{{ blockData.title }}</h1>
        </div>
        <div class="container jsb">
            <!-- buttons -->
            <div class="tabs__buttons">
                <div 
                    class="tabs__buttons__item"
                    v-for="(item, index) in this.blockData.tabs" 
                    :style="indexContent === index ? 'box-shadow: 0px 0px 20px 6px rgb(0 0 0 / 7%);' : null"
                    :key="index" @click="showContent(index)">
                    <div>
                        <p class="s3">{{ item.name }}</p>
                        <p class="s3">{{ item.caption }}</p>
                     </div>
                </div>
            </div>

            <!-- content -->
            <div class="tabs__content">
                <transition name="fade" appear>
                    <div class="tabs__content__item" v-for="(item, index) in this.blockData.tabs" :key="index" v-if="index === indexContent">
                        <p class="s2">{{ item.title }}</p>
                        <p>{{ item.subTitle }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                </transition>
            </div>
        </div>
        <SliderTabs :data="blockData.tabs"/> 
        </div>
    </div>

</template>

<script>
export default {
    name: "Vancancies",
    props: {
        blockData: Object,
    },
    data(){
        return {
            indexContent: 0,
            data: null,
            clicked: null
        }
    },
    methods: {
        showContent(index) {
            this.clicked = false
            this.indexContent = index
            this.clicked = true
        }
    },
    mounted() {
    }
}
</script>


