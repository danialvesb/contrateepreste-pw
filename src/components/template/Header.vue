<template>
  <div>
    <Menu class="menu"></Menu>
  </div>
</template>

<script>
import Menu from "../Menu/Menu";
  export default {
  components: {
    Menu
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
</style>