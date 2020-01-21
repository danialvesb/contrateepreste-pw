<template>
  <div>
    <p v-show="false">{{ loadData() }}</p>
    <Service v-for="service in services" :key="service.id" :service="service" ></Service>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

import Service from './Service'
export default {
    components: {
        Service
    },
    computed: {
        ...mapGetters({
            services: 'serviceList'
            
        })   
    },
    methods: {
      ...mapActions(['loadData']),
      loadDataLocal() {
        this.loadData()
      }
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
