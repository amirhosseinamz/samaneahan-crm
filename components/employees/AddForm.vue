<template>
  <div class="form-container">
    <form>
      <div class="user-name">
        <input type="text" placeholder="نام کاربری" v-model="userName">
      </div>
      <div class="password">
        <input type="text" placeholder="رمز عبور" v-model="userName">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data() {
    return {
      userName: null,
    }
  }
}
</script>

<style scoped lang="scss">
.form-container {
  width: 80%;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    input {
      background-color: $dark-2;
      border-radius: toRem(15);
    }
    .user-name {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .password {
      grid-column: 1/2;
      grid-row: 2/3;
    }
  }
}
</style>
