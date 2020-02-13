<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import Header from  './components/Template/Header'
  

export default {
  name: 'app',
  components: {
    Header,
  },

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";

}
body {
  background: linear-gradient(to left, #4286f4, #373B44);
}


</style>
