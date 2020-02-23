<template>
  <b-container fluid class="menu m-0 p-0">
    <b-row cols-md="12" class="m-0 p-0">

      <b-col class="m-0 p-0">
        <Menu class="menu" ></Menu>
      </b-col>
    </b-row>

<!--        <PageTitle class="page-title"></PageTitle>-->
<!--        <Orientation class="orientation"></Orientation>-->

  </b-container>
</template>

<script>
import Menu from "../Header/Menu";
// import Orientation from "../Header/Orientation";
// import PageTitle from "../Header/PageTitle";

  export default {
  components: {
    Menu,
    // Orientation,
    // PageTitle,

  }
}
</script>

<style scoped>
  .span {
    background: blue;
  }
  .menu {
    /*position:fixed;*/
    /*left:0px;*/
    /*top: 0px;*/
    /*z-index: 9999;*/
    /*padding: 0px;*/
  }
  .orientation {
    position: relative;
    top: 52px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
  .page-title {
    position: relative;
    top: 51px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>