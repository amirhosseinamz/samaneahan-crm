<template>
  <div class="form-container">
    <form>
      <base-input v-model="customerName" class="customer-name" place-holder="نام مشتری"></base-input>
      <base-input v-model="phoneNumber" class="phone-number" place-holder="شماره همراه"></base-input>
      <base-input v-model="address" class="address" place-holder="آدرس" :text-field="true"></base-input>
      <base-input v-model="telNumber" class="tel-number" place-holder="شماره ثابت"></base-input>

      <div class="register-customer">
        <base-button mode="primary" class="register-customer_btn">
          ذخیره مشتری
        </base-button>
      </div>

    </form>
  </div>
</template>
<script>
import BaseInput from '~/components/UI/BaseInput'
import BaseButton from '~/components/UI/BaseButton'
export default {
  components: { BaseButton, BaseInput },
  middleware: 'authentication',
  transition: {
    name: 'paging',
    mode: 'out-in'
  },
  data() {
    return {
      customerName: null,
      phoneNumber: null,
      telNumber: null,
      address: null,
    }
  }
}
</script>
<style scoped lang="scss">
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
.form-container {
  width: 80%;

  form::v-deep {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-column-gap: toRem(100);
    grid-row-gap: toRem(40);
    padding: 0 toRem(50);
    margin-top: toRem(50);
    @include xl {
      padding: toRem(25);
    }
    .customer-name {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .phone-number {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    .address {
      grid-column: 1/2;
      grid-row: 2/4;
      height: 100%;
    }
    .tel-number {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    .register-customer {
      grid-row: 4/5;
      grid-column: 1/3;
      @extend .justify-center;
      &_btn {
        max-width: toRem(400);
      }
    }
  }
}

</style>
