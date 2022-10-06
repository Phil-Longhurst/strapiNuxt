<template>
  <div>
    <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item" />
  </div>
</template>

<script>
import '../../assets/scss/styles.scss'

export default {
    
  data(){
    return {
      page: this.$route.params.page,
      pageID: "",
      blocks: ""
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          this.$store.state.apiroute.url + 'api/affiliates?filters[slug]=' + this.page
          // 'http://localhost:1337/api/affiliates/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      var pageID = thePageID.data[0].id;

      const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/affiliates/' + pageID + "?populate=deep,5"
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      }); 
      if (thePageData.data) {
          this.blocks = thePageData.data.attributes.dynamic_content;
      }

      console.log('thePageData affiliates', thePageData);
      // console.log(this.$router.params);
    }
  },

  mounted(){
    this.asyncData();
  }
  
}
</script>
