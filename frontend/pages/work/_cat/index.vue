<template>
  <div>

      <div 
        class="archive archive-work"
        :class="{ active: isActive }"> 
        <!-- slider clients -->
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
              <li v-for="(item, index) in this.categories.data">
                <nuxt-link :to="item.attributes.slug">{{ item.attributes.name }}</nuxt-link>
              </li>
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
            v-for="(item, index) in this.filteredWorks" 
            :key="index"
            :countIndex="index"  
            :url="item.attributes.slug"
            :img="item.attributes.featuredImage.data.attributes.url"
            :title="item.attributes.title"
            :tags="item.attributes.types"
            archiveName="work"
            category="type/"
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
          archive: "",
          logos: "",
          logosDark: "",
          blocks: "",
          isActive: false,
          categories: "",
          workData: '',
          workIDs: [],
          cats: [],
          filteredWorks: Array 
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
              this.blocks = options;
              this.archive = archivework.data.attributes
              this.title = archivework.data.attributes.sliderTitle
              this.logos = archivework.data.attributes.clients.data
              this.logosDark = archivework.data.attributes.clients_dark.data

              const theWorksID = await fetch(
              this.$store.state.apiroute.url + '/api/works?filters[types][slug]=' + this.$route.params.cat

            ).then((res) => {
                // can set up 404 redirection here
                return res.json();
            });
            console.log('workid', theWorksID);

            theWorksID.data.forEach(element => {
                this.workIDs.push(element.id);
            });
            console.log('theWorksID', theWorksID)

            // fetch request for all works
            const theWorks = await fetch(
              this.$store.state.apiroute.url + '/api/works?populate=*'
            ).then((res) => {
                // can set up 404 redirection here
                console.log('theworks', res);
                return res.json();
            });
            console.log('theWorks', theWorks);

            const idStore = this.workIDs;
            var filteredArray = theWorks.data.filter(function(e){
                return idStore.includes(e.id)
            });
            this.filteredWorks = filteredArray; 
            console.log('filteredArray', this.filteredWorks);

            // fetches all categories
            const theCats = await fetch(
                this.$store.state.apiroute.url + '/api/types'
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
  mounted() {
      this.asyncData();
  },
}
</script>
