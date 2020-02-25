<template>
  <b-container fluid class="menu m-0 p-0">
    <b-row class="m-0 p-0">
      <b-col class="m-0 p-0" md="12">
        <Menu class="menu" ></Menu>
      </b-col>
    </b-row>
    <b-row class="m-0 p-0">
      <b-col class="m-0 p-0" md="12">
        <PageTitle class="page-title"></PageTitle>
      </b-col>
    </b-row>
    <b-row class="m-0 p-0">
      <b-col class="m-0 p-0" md="12">
        <Orientation class="orientation"></Orientation>
      </b-col>
    </b-row>





  </b-container>
</template>

<script>
import Menu from "../Header/Menu";
import Orientation from "../Header/Orientation";
import PageTitle from "../Header/PageTitle";

  export default {
  components: {
    Menu,
    Orientation,
    PageTitle,

  }
}
</script>

<style scoped>


</style>