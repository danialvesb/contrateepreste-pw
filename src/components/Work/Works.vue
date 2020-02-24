<template>
  <b-container fluid class="m-0 p-0">
    <b-row cols="12" class="m-0 p-0">

      <b-col class="m-1 p-0"  md="8">
        <b-card-group deck class="m-0">
            <b-row cols="3">
                <Work v-for="work in filterWorks" :key="work.id" :work="work" ></Work>
            </b-row>
        </b-card-group>

      </b-col>
      <b-col class="m-1 mt-3 ml-2 p-0" md="2">
        <FilterWork v-on:filterData="filtersData = $event"></FilterWork>
      </b-col>
    </b-row>


  </b-container>
</template>

<script>

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

import { BCardGroup } from 'bootstrap-vue'

import Work from './Work'
import FilterWork from "../Filters/FilterWork";
export default {
    components: {
      Work,
      FilterWork,
      'b-card-group': BCardGroup
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


</style>
