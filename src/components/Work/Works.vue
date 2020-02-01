<template>
  <div>
    <Work v-for="work in works" :key="work.id" :work="work" ></Work>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

import Work from './Work'
export default {
    components: {
        Work
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
    align-items: center;
    justify-content: center;
  }
</style>
