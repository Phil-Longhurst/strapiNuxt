<template>
  <div>
    <BlockBuilder v-for="(item, index) in this.blocks" :key="index" :theme="theme" :blockComponent="item"/>
     <Related 
      :relPosts="this.relBlogs"
      title="blog"
      caption="More"
      postType="posts"
      />

    <Footer />
  </div>
</template>

<script>
import '../../assets/scss/styles.scss'

export default {
    
  data(){
    return {
      page: this.$route.params.page,
      pageID: "",
      blocks: "",
      relBlogs: Array,
      limitationList: 3
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          this.$store.state.apiroute.url + '/api/blogs?filters[slug]=' + this.page
          // 'http://localhost:1337/api/blogs/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      var pageID = thePageID.data[0].id;

      const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/blogs/' + pageID + "?populate=deep,5"
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      }); 
      if (thePageData.data) {
          this.blocks = thePageData.data.attributes.dynamic_content;
      }

      const theRelated = await fetch(
          this.$store.state.apiroute.url + '/api/blogs' + '?populate=deep,5',
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      }); 
      if (theRelated.data) {
          this.relBlogs = theRelated.data
          console.log('relblogs',this.relBlogs)
      }

      console.log('thePageData', thePageData);
      // console.log(this.$router.params);
    }
  },

  mounted(){
    this.asyncData();
  }
  
}
</script>
