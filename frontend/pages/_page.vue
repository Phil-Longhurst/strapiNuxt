<template>
  <div>
    <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" />
  </div>
</template>

<script>
import '../assets/scss/styles.scss'

export default {
    data() {
        return {
            page: this.$route.params.page,
            pageID: "",
            blocks: ""
        };
    },
    methods: {
        async asyncData() {
            const thePageID = await fetch(this.$store.state.apiroute.url + "/api/pages?filters[slug]=" + this.page
            // 'http://localhost:1337/api/pages/1?populate=dynamic_content'
            ).then((res) => {
                // can set up 404 redirection here
                return res.json();
            });
            console.log(thePageID);
            
            var pageID = thePageID.data[0].id;
            const thePageData = await fetch(this.$store.state.apiroute.url + "/api/pages/" + pageID + "?populate=deep,5").then((res) => {
                // can set up 404 redirection here
                return res.json();
            });
            console.log("thePageData", thePageData);
            if (thePageData.data) {
                this.blocks = thePageData.data.attributes.dynamic_content;
            }
            // console.log(this.$router.params);
        }
    },
    mounted() {
        this.asyncData();
        console.log('hello')

        if (this.$route.path == '/contact') {
          this.$store.commit('apiroute/enable', false)
          console.log('url ', this.$store.state.apiroute.contactForm)
        } else {
          this.$store.commit('apiroute/enable', true)

        }
    },
}
</script>


