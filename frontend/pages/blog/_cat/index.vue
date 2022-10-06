<template>
  <div>

      <div 
        class="archive"
        :class="{ active: isActive }"> 
        <div class="container center"> 
        <!-- dropdown -->
          <div>
          </div>
          <p class="archive__dropdown">All posts<Chevron /></p>
          <div class="archive__dropdown__list">
            <ul>
              <li v-for="(item, index) in this.categories.data"><nuxt-link :to="item.attributes.slug">{{ item.attributes.name }}</nuxt-link></li>
            </ul>
          </div>

        <!-- theme -->
          <div 
            class="archive__theme"
            @click="isActive = !isActive">
            <div></div>
            <LightOff v-if="isActive == false" />
            <LightOn v-if="isActive == true" />
          </div>
        </div>

        <!-- posts -->
        <div class="container jsb"> 
          <WorkColumn 
            v-for="(item, index) in this.filteredBlogs" 
            :key="index"
            :countIndex="index"  
            :url="item.attributes.slug"
            :img="item.attributes.featuredImage.data.attributes.url"
            :title="item.attributes.Title"
            :tags="item.attributes.categories"
            archiveName="blog"
            category="category/"
          />
        </div>
      </div>

  </div> 
</template>

<script>
import '../../../assets/scss/styles.scss'

import axios from 'axios';
export default { 
    data() { 
      return {
          page: this.$route.params.page,
          blocks: "",
          isActive: false,
          categories: "",
          blogData: "",
          blogIDs: [],
          cats: [],
          filteredBlogs: Array 
      };
  },
  name: 'InspirePage', 
  methods: {
    async asyncData() {
        const theBlogsID = await fetch(
          this.$store.state.apiroute.url + '/api/blogs?filters[categories][slug]=' + this.$route.params.cat

        ).then((res) => {
            // can set up 404 redirection here
            return res.json();
        });
        console.log('blogid', theBlogsID);

        theBlogsID.data.forEach(element => {
            this.blogIDs.push(element.id);
        });
        console.log('theBlogsID', theBlogsID)

        // fetch request for all blogs
        const theBlogs = await fetch(
          this.$store.state.apiroute.url + '/api/blogs?populate=*'
        ).then((res) => {
            // can set up 404 redirection here
            console.log('theblogs', res);
            return res.json();
        });

        const idStore = this.blogIDs;
        var filterdArray = theBlogs.data.filter(function(e){
            return idStore.includes(e.id)
        });
        this.filteredBlogs = filterdArray; 
        console.log('filterdArray', this.filteredBlogs);

        // fetches all categories
        const theCats = await fetch(
            this.$store.state.apiroute.url + '/api/categories'
        ).then((res) => {
        // can set up 404 redirection here
            return res.json();
        });
        this.categories = theCats
        console.log('theCats', theCats);

        theCats.data.forEach(element => {
            this.cats.push( { option: element.attributes.name , value: element.attributes.slug } ) 
        });;
    }
  },
  mounted(){
    this.asyncData()
  }
}
</script>
