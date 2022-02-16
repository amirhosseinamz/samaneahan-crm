<template>
<div></div>
</template>

<script>
export default {
  name: 'index',
  transition: {
    mode: 'out-in',
    name: 'paging'
  }
}
</script>

<style scoped>
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
</style>
