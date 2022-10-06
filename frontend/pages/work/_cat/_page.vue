<template>
  <div>
    <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :blockComponent="item"/>
    <Related 
      :relPosts="this.relWork.data"
      title="work"
      caption="Similar"
      archive="work"
      />
  </div>
</template>

<script>
import '../../../assets/scss/styles.scss'

export default {
    
  data(){
    return {
      page: this.$route.params.page,
      pageID: "",
      blocks: "",
      relWork: Object,
      limitationList: 3
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          this.$store.state.apiroute.url + '/api/works?filters[slug]=' + this.page
          // 'http://localhost:1337/api/works/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      var pageID = thePageID.data[0].id;

      const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/works/' + pageID + "?populate=deep,5"
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      }); 
      if (thePageData.data) {
          this.blocks = thePageData.data.attributes.dynamic_content;
      }

      const theRelated = await fetch(
          this.$store.state.apiroute.url + '/api/works' + '?populate=deep,5',
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      }); 
      if (theRelated.data) {
          console.log('relwork',this.relWork)
      }
      this.relWork = theRelated


      console.log('thePageData', thePageData);
      // console.log(this.$router.params);
    }
  },

  mounted(){
    this.asyncData();
  }
  
}
</script>
