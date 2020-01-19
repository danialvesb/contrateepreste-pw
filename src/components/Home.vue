<template>
  <div>
    <h1 class="ml-1">Início</h1>
    <b-button class="primary ml-1" @click="loadDataLocal">Carregar</b-button>

    <ServiceList class="ml-1"></ServiceList>

  </div>
</template>

<script>
import ServiceList from './services/ServiceList'
import { mapActions } from 'vuex'

export default {
  components: {
    ServiceList
  },
  methods: {
    ...mapActions(['loadData']),
    loadDataLocal() {
      this.loadData()
    }
  }
}
</script>

<style>

</style>