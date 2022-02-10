<template>
  <table cellpadding="0" cellspacing="0">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'BaseTable'
}
</script>

<style scoped lang="scss">
table {
  width: 100%;
  background-color: $dark-2;
  border-radius: toRem(15);
  padding: toRem(20);
  tr {
    transition: all 0.1s ease;
    &:hover {
      background-color: $dark;
    }
    td {
      text-align: center;
      text-align: -webkit-center;
      border-bottom: toRem(2) solid $dark-3;
      padding: toRem(15) 0;
    }
    &:last-child {
      td {
        border-bottom: none;
      }
    }
  }
}
</style>
