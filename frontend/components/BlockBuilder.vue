<template>
   <div class="BlocksBuilder__item">
        <HeroSection v-if="this.blockComponent.__component == 'hero.hero-section'" :blockData="this.blockComponent" />
        <TextSection v-if="this.blockComponent.__component == 'text-content.text-section'" :blockData="this.blockComponent" />
        <Clients v-if="this.blockComponent.__component == 'sliders.slider-clients'" :theme="theme" :blockData="this.blockComponent" />
        <OurWork v-if="this.blockComponent.__component == 'work.our-work'" :blockData="this.blockComponent" />
        <Services v-if="this.blockComponent.__component == 'sliders.slider-services'" :blockData="this.blockComponent" />
        <Tabs v-if="this.blockComponent.__component == 'tabs.tabs'" :blockData="this.blockComponent" />
        <TextImg v-if="this.blockComponent.__component == 'text-content.text-img'" :blockData="this.blockComponent" />
        <HeroScroll v-if="this.blockComponent.__component == 'hero.hero-scroll'" :blockData="this.blockComponent" />
        <HeroService v-if="this.blockComponent.__component == 'hero.hero-service'" :blockData="this.blockComponent" />
        <TextColumns v-if="this.blockComponent.__component == 'text-content.text-columns'" :blockData="this.blockComponent" />
        <HeadingBasic v-if="this.blockComponent.__component == 'text-content.heading-basic'" :blockData="this.blockComponent" />
        <Stats v-if="this.blockComponent.__component == 'data.stats'" :blockData="this.blockComponent" />
        <HeroQuote v-if="this.blockComponent.__component == 'hero.hero-quote'" :blockData="this.blockComponent" />
        <Quote v-if="this.blockComponent.__component == 'text-section.quote'" :blockData="this.blockComponent" />
        <SocialIcons v-if="this.blockComponent.__component == 'social.social-icons'" :blockData="this.blockComponent" />
        <CollectionArchive v-if="this.blockComponent.__component == 'collection.collection-archive'" :theme="this.theme" :blockData="this.blockComponent" />
        <TabsHorozontal v-if="this.blockComponent.__component == 'tabs.tabs-horozontal'" :theme="this.theme" :blockData="this.blockComponent" />
        <TitleText v-if="this.blockComponent.__component == 'text-content.title-text'" :theme="this.theme" :blockData="this.blockComponent" />
        <HeroBlog v-if="this.blockComponent.__component == 'hero.hero-blog'" :theme="this.theme" :blockData="this.blockComponent" />
        <HeroWork v-if="this.blockComponent.__component == 'hero.hero-work'" :theme="this.theme" :blockData="this.blockComponent" />
        <TextDouble v-if="this.blockComponent.__component == 'text-content.text-double'" :activated="this.active" :theme="this.theme" :blockData="this.blockComponent" />
        <TabsAffiliates v-if="this.blockComponent.__component == 'tabs.tabs-affiliates'" :theme="this.theme" :blockData="this.blockComponent" />
        <TheTroupe v-if="this.blockComponent.__component == 'troupe.the-troupe'" :theme="this.theme" :blockData="this.blockComponent" />
        <HeadingScroll v-if="this.blockComponent.__component == 'text-content.heading-scroll'" :theme="this.theme" :blockData="this.blockComponent" />
        <HeroGeneral v-if="this.blockComponent.__component == 'hero.hero-general'" :theme="this.theme" :blockData="this.blockComponent" />
        <Vacancies v-if="this.blockComponent.__component == 'tabs.vacancies'" :theme="this.theme" :blockData="this.blockComponent" />
        
    </div>
</template>

<script>

export default {
    name: 'BlockBuilder',
    props: {
        ID: Number,
        blockComponent: Object,
        active: Boolean
    },
    data(){
        return {
            theme: true
        }
    },
    methods: {
    },
    mounted(){
        console.log(this.blockComponent);
    }
}
</script>


