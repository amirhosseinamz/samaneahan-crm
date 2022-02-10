<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h1>
          ورود ادمین
        </h1>
      </div>
      <form>
        <div class="user-name">
          <input type="text" placeholder="نام کاربری" v-model.trim="userName">
        </div>
        <div class="password">
          <input type="text" placeholder="رمز عبور" v-model.trim="password">
        </div>
        <p class="error" v-if="showError">
          اطلاعات به درستی وارد نشده
        </p>
        <div class="submit-button">
          <base-button @button-clicked="submitForm">
            ورود
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/UI/BaseButton'

export default {
  name: 'index',
  layout: 'NoSidebar',
  components: {
    BaseButton
  },
  data () {
    return {
      userName: null,
      password: null,
      showError: false
    }
  },
  methods: {
    async submitForm () {
      if (!this.userName  || !this.password) {
        this.showError = true;
        return;
      }
        await this.$store.dispatch('authentication/authentication/adminLogin', {
          userName: this.userName,
          password: this.password,
        });
    }
  }
}
</script>

<style scoped lang="scss">

.container {
  display: flex;
  align-items: center;
  height: 100vh;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $dark-2;
    border-radius: 10px;
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);
    padding: 50px 0;

    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      //margin-top: 50px;
      margin-bottom: 40px;

      h1 {
        color: $white;
      }
    }

    .user-name,
    .password {
      input {
        width: toRem(400);
        height: toRem(50);
        border-radius: toRem(10);
        padding-right: toRem(8);
        border: toRem(1) solid $gray-4;
        font-size: 16px;
        margin-bottom: 20px;
        box-shadow: 0 0 toRem(4) toRem(2) #242424;
      }
    }
    .error {
      color: $error-color;
      font-size: toRem(14);
    }

    .submit-button {
      margin-top: 40px;

      button {
        box-shadow: 0 0 toRem(4) toRem(2) #242424;
      }
    }
  }
}

</style>
