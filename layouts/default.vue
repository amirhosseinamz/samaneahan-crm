<template>
  <div class="layout-wrapper">
    <side-bar class="sidebar-wrapper"></side-bar>
    <Nuxt class="application" />
  </div>
</template>

<script>
import SideBar from '~/components/Navigation/SideBar'
export default {
  components: { SideBar }
}
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.layout-wrapper {
  @extend .d-flex;
  .sidebar-wrapper {
    height: 100vh;
    width: 20%;
  }
  .application {
    width: 80%;
  }
}


</style>
