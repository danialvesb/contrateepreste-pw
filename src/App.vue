<template>
  <b-container id="app" fluid class="m-0 p-0">

    <b-row cols="12"  class="m-0 p-0">
      <b-col class="m-0 p-0">
        <Header class="header"></Header>
        <Main></Main>
        <!--        <Footer></Footer>-->

      </b-col>

    </b-row>


  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import Footer from "./components/Template/Footer";
import Main from "./components/Template/Main";
import Header from "./components/Template/Header";


export default {
  name: 'app',
  components: {
    // Footer,
    Header,
    Main,

  },

}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
}

body {
  background: rgb(241, 242, 247);
}

.tesee {
  background: violet;
}

</style>
