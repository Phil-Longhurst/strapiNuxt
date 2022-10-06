<template>
    <div class="the-troupe">
        <div class="padding"></div>
            <div class="container border-dark">
                <!-- title -->
                <div class="the-troupe__title">
                    <p>{{ this.blockData.caption }}</p>
                    <h1>{{ this.blockData.title }}</h1>
                </div> 

                <!-- dept btns desk -->
                <div class="the-troupe__departments center">
                     <BtnFour v-for="(item, index) in this.departments.data" 
                      :text="item.attributes.name" :value="index" 
                      v-on:click.native="myFilter(item.attributes.name, index)"
                        :class="[
                            activeIndex == index ? 'active' : '',
                        ]"
                     /> 
                </div>
                <div class="the-troupe__dropdown">
                  <p class="archive__dropdown">Department<Chevron /></p>
                  <div v-bind:style="{ height: height + 'px' }" v-on:click.native="height = 0" class="archive__dropdown__list">
                    <ul>
                          <li v-for="(item, index) in this.departments.data"
                            @click="myFilter(item.attributes.name)"
                          >
                            <p>{{ item.attributes.name }}</p>
                          </li>
                    </ul>
                  </div>
                </div>
              

            <!-- slider -->
            <div class="slider-troupe">
                <SliderTroupe 
                    v-if="showSlider"
                    :dep="this.deptValue"
                    :sliderSlides="this.blocks.data"
                />
            </div> 
            <!-- troupe -->
            <WorkColumn 
                v-if="item.attributes.departments.data[0].attributes.name == deptValue"
                v-for="(item, index) in this.blocks.data" 
                :key="index"
                :countIndex="index"  
                :url="item.attributes.slug"
                :img="item.attributes.image.data.attributes.url"
                :title="item.attributes.name" 
                :excerpt="item.attributes.role"
                archiveName="troupe"
                :dept="item.attributes.departments.data[0].attributes.name"
                category=""
            /> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default { 
    data() { 
      return {
          blocks: "",
          isActive: false,
          departments: "",
          deptValue: "Design",
          activeIndex: 0,
          data: null,
          showSlider: true
      };
  },
  props: {
      blockData: Object,
  },

  mounted() {
    const options = {
      url: this.$store.state.apiroute.url + '/api/troupes' + '?populate=deep,5',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    };
    const depts = {
      url: this.$store.state.apiroute.url + '/api/departments' + '?populate=deep,5',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    };
    axios(options)
      .then(response => {
        this.blocks = response.data;
        console.log('triuoe stuff', this.blocks.data)
      });
    
    axios(depts)
      .then(res => {
        this.departments = res.data;
      });
  },
  methods: {
      async myFilter(val, v) {
        this.showSlider = false
        await new Promise((resolve) => setTimeout(resolve, 1));
        this.deptValue = val
        console.log("console for the value troupe", this.deptValue);
        this.showSlider = true
        this.activeIndex = v
        console.log('indexcontent', v)
      },
  }
}
</script>


