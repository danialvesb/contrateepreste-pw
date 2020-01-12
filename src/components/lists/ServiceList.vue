<template>
  <div>
    {{ services }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            services: 'serviceList'
        })
    }
}
</script>

<style>

</style>
