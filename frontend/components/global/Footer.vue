<template>
    <div class="footer">
        <div v-if="this.$store.state.apiroute.contactForm">
            <Words />
            <Contact />
            <MapAccordion :mapBackground="mapBackgroundUrl" 
                        :mapBackgroundAlt="mapBackgroundAlt"
                        :mapLogoAlt="mapLogoAlt"
                        :mapLogoUrl="mapLogoUrl"
                        :map="mapImg"
                        />
        </div>
        <div class="footer__columns">
            <div class="container jsb ac">
                <nuxt-link :to="'/'"><img class="logo" :alt="logoAlt" :src="this.$store.state.apiroute.url + logoUrl" /></nuxt-link>
                <Columns :links="links" :external="false"/>
                <div class="address"><p v-for="(item, index) in address" :key="index">{{item.text}}</p></div>
                <Columns :links="socialLinks" :external="true"/>
            </div>
        </div>
        <Copyright />
    </div>

</template>

<script>
export default {
    name: "Footer",
    props: {
        blockData: Array,
        footerD: Boolean,
    },
    data() {
        return {
            mapBackgroundAlt: "",
            mapBackgroundUrl: "",
            mapImg: "",
            mapLogoAlt: "",
            mapLogoUrl: "",
            logoUrl: "",
            logoAlt: "",
            address: "",
            links: [],
            socialLinks: [],
            footerD: true,

        };
    },
    methods: {
        async asyncData() {
            const footer = await fetch(this.$store.state.apiroute.url + "/api/footer?populate=*"
            ).then((res) => {
                return res.json();
            });
            this.mapBackgroundUrl = footer.data.attributes.logo_map_background.data.attributes.url
            this.mapBackgroundAlt = footer.data.attributes.logo_map_background.data.attributes.alternativeText
            this.mapLogoUrl = footer.data.attributes.logo_map.data.attributes.url
            this.mapLogoAlt = footer.data.attributes.logo_map.data.attributes.alternativeText
            this.logoUrl = footer.data.attributes.logo_onqor.data.attributes.url
            this.logoAlt = footer.data.attributes.logo_onqor.data.attributes.alternativeText
            this.address = footer.data.attributes.address
            this.links = footer.data.attributes.links
            this.mapImg = footer.data.attributes.map.data.attributes.url
            this.socialLinks = footer.data.attributes.social_links
            console.log(footer)
        }
    },
    mounted() {
        this.asyncData();
        this.footerD = this.footerD
    }
}
</script>


