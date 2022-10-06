<template>
    <div class="footer">
        <div v-if="!this.$store.state.apiroute.contactForm">
            <Words />
            <Contact />
            <div class="footer__socials">
                <div class="container center">
                    <div v-for="(item, index) in socialLinks" 
                        class="footer__socials__item">
                        <a :href="item.link">
                            <img :src="item.img.data.attributes.url" :alt="item.img.data.attributes.alternativeText
"/>
                            <p>{{ item.text }}</p> 
                        </a>
                    </div>
                </div>
            </div>
            <MapAccordion :mapBackground="mapBackgroundUrl" 
                        :mapBackgroundAlt="mapBackgroundAlt"
                        :mapLogoAlt="mapLogoAlt"
                        :mapLogoUrl="mapLogoUrl"
                        :map="mapImg"
                        />
        </div>
    </div>

</template>

<script>
export default {
    name: "FooterContact",
    props: {
        blockData: Array,
        footerD: Boolean,
        socialss: Array,
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
            const footer = await fetch(this.$store.state.apiroute.url + "/api/footer?populate=deep,5"
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
            console.log('footer all', footer)
        }
    },
    mounted() {
        this.asyncData();
        this.footerD = this.footerD
        console.log('sociallinks', this.socialLinks)
    }
}
</script>


