<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import Header from  './components/template/Header'
  

export default {
  name: 'app',
  components: {
    Header,
  },

}
</script>

<style scoped>

  #app{
    top: 0%;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    
    background: linear-gradient(to bottom, #FFFFFF, #6DD5FA, #2980B9);
  }

</style>
