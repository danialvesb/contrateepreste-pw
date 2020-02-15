<template>
  <div>
    <Work v-for="work in works" :key="work.id" :work="work" ></Work>
    <FilterWork></FilterWork>
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
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: left;
  }
</style>
