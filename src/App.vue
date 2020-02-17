<template>
  <div id="app">

    <Header></Header>
    <Main></Main>
    <Footer></Footer>

  </div>
</template>

<script>

import Footer from "./components/Template/Footer";
import Main from "./components/Template/Main";
import Header from "./components/Template/Header";
export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Main
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
  background: rgb(241, 242, 247)
}


</style>
