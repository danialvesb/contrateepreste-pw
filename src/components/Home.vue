<template>
  <b-container fluid class="m-0 p-0">
    <b-card overlay  :img-src="require('../assets/home.jpg')" img-alt="Card Image" text-variant="white" title="Contrate & Online" sub-title="Painel de Gestão">
      <b-img></b-img>
      <b-card-text>

      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
import  { BCard, BCardText } from 'bootstrap-vue'
export default {
  components: {
    'b-card': BCard,
    'b-card-text': BCardText,
    
  }
}
</script>

<style>

</style>