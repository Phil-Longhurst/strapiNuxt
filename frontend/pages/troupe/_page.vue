<template>
  <div>
    <div 
      class="single-troupe"
     :class="{ active: isActive }"
    >
        <div class="single-troupe__header">
          <div class="container">
              <!-- theme -->
              <div 
                class="archive__theme"
                @click="isActive = !isActive">
                <div></div>
                <LightOff v-if="isActive == false" />
                <LightOn v-if="isActive == true" />
              </div>
              <!-- breadcrumb -->
              <div class="archive__breadcrumb">
                <p><a :href="$store.state.apiroute.local + '/troupe'">Troupe</a><span>></span>{{ this.name }}</p>
              </div>
          </div>
        </div>

        <!-- hero -->
        <div class="single-troupe__hero">
          <img 
            :src="$store.state.apiroute.url + this.image" 
            :alt="this.alt"
            />
           <div class="container jsb">
            <div class="single-troupe__hero__text">
                <!-- title -->
                <div class="single-troupe__hero__title">
                  <h3>{{ this.name }}</h3>
                  <p class="b2">{{ this.role }}</p>
                </div>

                <!-- bio -->
                <TextColumn
                  v-for="(item, index) in this.bio" 
                  :key="index" 
                  :col="item" 
                />

                <!-- socials -->
                <div 
                  v-if="this.linkedin"
                  class="single-troupe__hero__social">
                  <Linkedin />
                  <p>Find me on <a target="_blank" :href="this.linkedin">LinkedIn</a> or feel free to <a :href="'mailto:' + this.email">email me</a></p>
                </div>
              </div>

            </div> 
        </div>
    </div>

    <BlockBuilder :active="isActive" v-for="(item, index) in this.blocks" :key="index" :blockComponent="item"/>
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
      isActive: true,
      pageData: Object,
      name: String,
      role: String,
      bio: Array,
      email: String,
      linkedin: String,
      image: String,
      alt: String
    }
  },
  methods: {
    async asyncData() {
      const thePageID = await fetch(
          this.$store.state.apiroute.url + '/api/troupes?filters[slug]=' + this.page
          // 'http://localhost:1337/api/troupes/1?populate=dynamic_content'
      ).then((res) => {
        // can set up 404 redirection here
      return res.json();
      });
      var pageID = thePageID.data[0].id;

      const thePageData = await fetch(
          this.$store.state.apiroute.url + '/api/troupes/' + pageID + "?populate=deep,5"
        ).then((res) => {
        // can set up 404 redirection here
        return res.json();
      }); 
      if (thePageData.data) {
          this.blocks = thePageData.data.attributes.dynamic_content;
          this.pageData = thePageData
          this.name = this.pageData.data.attributes.name
          this.role = this.pageData.data.attributes.role
          this.bio = this.pageData.data.attributes.bio
          this.email = this.pageData.data.attributes.email
          this.linkedin = this.pageData.data.attributes.linkedin
          this.image = this.pageData.data.attributes.image.data.attributes.url
          this.alt = this.pageData.data.attributes.image.data.attributes.alternativeText
      }

      console.log('the troupe data', thePageData);
      console.log('attr', this.pageData.data.attributes.name);

    }
  },

  mounted(){
    this.asyncData();
  }
  
}
</script>
