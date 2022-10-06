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
                <nuxt-link v-for="(item, index) in this.categories.data" :to="'/blog/' + item.attributes.slug">
                  <li>{{ item.attributes.name }}</li>
                </nuxt-link>
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
            v-for="(item, index) in this.blocks.data" 
            :key="index"
            :countIndex="index"  
            :url="item.attributes.slug"
            :urlCat="item.attributes.categories.data"
            :img="item.attributes.featuredImage.data.attributes.url"
            :title="item.attributes.Title"
            :excerpt="item.attributes.excerpt"
            :tags="item.attributes.categories"
            archiveName="blog"
            category="category/"
          />
        </div>
      </div>

  </div> 
</template>

<script>
import '../../assets/scss/styles.scss'

import axios from 'axios';
export default { 
    data() { 
      return {
          blocks: "",
          isActive: false,
          categories: ""
      };
  },
  name: 'InspirePage', 
  mounted() {
        console.log('hello');

    const options = {
      url: this.$store.state.apiroute.url + '/api/blogs' + '?populate=deep,5',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }, 
    };

    const category = {
      url: this.$store.state.apiroute.url + '/api/categories' + '?populate=deep,5',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }, 
    };

    axios(options)
      .then(response => {
        this.blocks = response.data;
      });

    axios(category)
      .then(response => {
        this.categories = response.data;
        console.log('the cats', this.categories)
      });

  },
}
</script>
