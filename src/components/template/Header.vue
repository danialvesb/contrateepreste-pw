<template>
  <div>
    <Menu class="menu"></Menu>
    <PageTitle class="page-title"></PageTitle>
    <Orientation class="orientation"></Orientation>
  </div>
</template>

<script>
import Menu from "../Header/Menu";
import Orientation from "../Header/Orientation";
import PageTitle from "../Header/PageTitle";
  export default {
  components: {
    Menu,
    Orientation,
    PageTitle
  }
}
</script>

<style>
  .menu {
    position:fixed;
    left:0px;
    top: 0px;
    width: 100%;
    z-index: 9999;
  }
  .orientation {
    position: relative;
    top: 45px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
  .page-title {
    position: relative;
    top: 41px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>