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
  position: relative;
  .sidebar-wrapper {
    height: 100vh;
  }
  .application {
    width: 80%;
    @include lg {
      width: calc(100% - toRem(80));
      margin-right: auto;
    }
  }
}


</style>
