<template>
  <div class="container">
    <div class="works">
      <Work v-for="work in works" :key="work.id" :work="work" ></Work>
    </div>

    <div class="filter-works">
      <FilterWork></FilterWork>
    </div>

  </div>
</template>

<script>


  import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import Work from './Work'
import FilterWork from "../Filters/FilterWork";
export default {
    components: {
        Work,
        FilterWork
    },
    computed: {
        ...mapGetters({
            works: 'worksList'
        })   
    },
    methods: {
      ...mapActions(['loadData']),
      loadDataLocal() {
        this.loadData()
      }
    },
    mounted() {
      this.loadDataLocal()
    }

    
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .works {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: left;
    position: relative;
    top: 80px;
    width: 82%;
  }

  .filter-works {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    top: 90px;
    right: 5px;
    width: 18%;
    height: 800px;
    background: rgb(36, 41, 46);
    border-radius: 5px;
  }


</style>
