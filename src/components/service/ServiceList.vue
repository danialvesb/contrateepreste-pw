<template>
  <div>
    <Service v-for="service in services" :key="service.id" :service="service" ></Service>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
}
</script>

<style scoped>

</style>
