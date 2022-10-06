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
            blocks: ""
        };
    },
    methods: {
        async asyncData() {

            const HomePage = await fetch(this.$store.state.apiroute.url + "/api/pages?filters[home]=1").then((res) => {
              return res.json();
            });

            console.log('home-page', HomePage.data[0].id );

            const thePageData = await fetch(this.$store.state.apiroute.url + "/api/pages/" + HomePage.data[0].id + "?populate=deep,5").then((res) => {
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
    },
}
</script>