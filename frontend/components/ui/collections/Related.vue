<template>
  <!-- related posts -->
    <div class="our-work">
      <!-- title -->
      <div class='container flex-col our-work__title'>
          <p class="our-work__caption">{{ this.caption }}</p>
          <h1>{{ this.title }}</h1>
      </div>
      <div class="container jsb">
        <!-- work col blogs -->
            <WorkColumn 
              v-for="(item, index) in this.relPosts" 
              v-if="relPosts && relPosts.length > 0 && index < 3 && title == 'posts'"
              :key="index"
              :countIndex="index"  
              :url="item.attributes.slug"
              :img="item.attributes.featuredImage.data.attributes.url"
              :title="item.attributes.Title"
              :excerpt="item.attributes.excerpt"
              :tags="item.attributes.categories"
              archive="blog/"
              category="category/"
            />

          <!-- work col work -->
            <WorkColumn 
              v-for="(item, index) in this.relPosts" 
              v-if="relPosts && relPosts.length > 0 && index < 3 && title == 'work'"
              :key="index"
              :countIndex="index"  
              :url="item.attributes.slug"
              :img="item.attributes.featuredImage.data.attributes.url"
              :title="item.attributes.title"
              :excerpt="item.attributes.excerpt"
              :tags="item.attributes.types"
              archive="work/"
              category="type/"
            />
      </div>
      <!-- btn -->
      <div class="container center"> 
          <BtnOne text="View more" :postType="this.archive" />
      </div> 
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
    name: 'Related',
    components: {
        VueMarkdown
    },
    props: {
        relPosts: Array,
        title: String,
        caption: String,
        archive: String,
        title: String
    }, 
    data() {
      return {
        relaPosts: {}
      }
    },
  mounted() {

    console.log('spagetti1', this.relPosts)
    console.log('spagetti', this.relaPosts)
  },
  watch: {
    relPosts(val){
      this.relaPosts = val
    }
  },
}
</script>
