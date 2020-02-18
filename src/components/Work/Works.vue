<template>
  <div class="container">
    <div class="works">
      <Work v-for="work in filterWorks" :key="work.id" :work="work" ></Work>
    </div>

    <div class="filter-works">
      <FilterWork v-on:filterData="filtersData = $event"></FilterWork>
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
          works: 'worksList',
        }),
      filterWorks: function () {
        return this.works.filter((item) => {
          return item.title.match(this.filtersData.title)
        })
      },
      filterWorksCategory: function () {
        return this.works.filter((item) => {
          return item.category_title.match(this.filtersData.category)
        })

      },

    },
    data() {
      return {
        filtersData: []
      }
    },
    methods: {
      ...mapActions(['loadData']),
      loadDataLocal() {
        this.loadData()
      },
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
    top: 50px;
    width: 82%;
  }

  .filter-works {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    top: 100px;
    right: 5px;
    width: 18%;
    height: 300px;
    background: rgb(36, 41, 46);
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }


</style>
