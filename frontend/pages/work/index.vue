<template>
  <div>

      <div 
        class="archive archive-work"
        :class="{ active: isActive }"> 
        <!-- slider clients -->
        <div class='clients'> 
            <div class="container ae jsb">
              <div class="words__container__slider"> 
                  <div v-if="this.archive.sliderTitle" id="clients__title" class="clients__title">
                      <h1>{{ this.archive.sliderTitle }}</h1>
                      <p class="s2">{{ this.caption }}</p>
                  </div>
                  <SliderClients v-if="isActive == true" :images="this.logos" />  
                  <SliderClients v-if="isActive == false" :images="this.logosDark" />  
                </div>
            </div>
        </div>

        <div class="container center"> 
        <!-- dropdown -->
          <div>
          </div>
          <p class="archive__dropdown">All posts<Chevron /></p>
          <div class="archive__dropdown__list">
            <ul>
                <nuxt-link v-for="(item, index) in this.categories.data" :to="'/work/' + item.attributes.slug">
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
            :img="item.attributes.featuredImage.data.attributes.url"
            :title="item.attributes.title"
            :excerpt="item.attributes.excerpt"
            :tags="item.attributes.types"
            archiveName="work"
            category="type/"
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
          archive: "",
          logos: "",
          categories: "",
          logosDark: "",
      };
  },
  name: 'InspirePage', 

  methods: {
    async asyncData() {
            const archivework = await fetch(this.$store.state.apiroute.url + '/api/archivework' + '?populate=deep,5'
            ).then((res) => {
                return res.json();
            });
            const options = await fetch(this.$store.state.apiroute.url + '/api/works' + '?populate=deep,5'
            ).then((res) => {
                return res.json();
            });
            const category = await fetch(this.$store.state.apiroute.url + '/api/types' + '?populate=deep,5'
            ).then((res) => {
                return res.json();
            });

              this.blocks = options;
              this.categories = category
              this.archive = archivework.data.attributes
              this.title = archivework.data.attributes.sliderTitle
              this.logos = archivework.data.attributes.clients.data
              this.logosDark = archivework.data.attributes.clients_dark.data
              console.log('clients', this.archive)
        }
  },
  mounted() {
      this.asyncData();
  },
}
</script>
