<template>
  <div>
    <Header />

      <div 
        class="archive-blog"
        :class="{ active: isActive }"> 
        <div class="container center"> 
        <!-- dropdown -->
          <div>
          </div>
          <p class="archive-blog__dropdown">All posts<Chevron /></p>
          <div class="archive-blog__dropdown__list">
            <ul>
              <li>Web design</li>
              <li>Campaign</li>
              <li>Photography</li>
              <li>Videography</li>
            </ul>
          </div>

        <!-- theme -->
          <div 
            class="archive-blog__theme"
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
            :img="item.attributes.featuredImage.data.attributes.url"
            :title="item.attributes.Title"
            :excerpt="item.attributes.excerpt"
          />
        </div>
      </div>

    <Footer />
  </div> 
</template>

<script>
import '../../assets/scss/styles.scss'

import axios from 'axios';
export default { 
    data() { 
      return {
          blocks: "",
          isActive: false
      };
  },
  name: 'InspirePage', 
  mounted() {
    const options = {
      url: this.$store.state.apiroute.url + '/api/affiliates' + '?populate=deep,5',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    };
    axios(options)
      .then(response => {
        this.blocks = response.data;
        console.log(this.blocks);
      });
  },
}
</script>
