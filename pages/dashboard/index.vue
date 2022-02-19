<template>
  <div class=""></div>
</template>

<script>
export default {
  name: 'index',
  middleware: ['authentication', 'redirectDashboard'],
  transitions: {
    name: 'paging',
    mode: 'out-in'
  },
}
</script>

<style scoped>
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
</style>
