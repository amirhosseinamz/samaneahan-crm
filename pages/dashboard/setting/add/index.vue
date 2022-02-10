<template>
  <div class="form-container">
    <form>
      <base-dropdown class="category" :list="categoryData" place-holder="نام دسته بندی"></base-dropdown>
      <base-input v-model="answer" class="answer" place-holder="پاسخ"></base-input>

      <div class="register-setting">
        <base-button class="register-setting_btn" mode="primary">
          ذخیره
        </base-button>
      </div>

    </form>
  </div>
</template>

<script>
import BaseDropdown from '~/components/UI/BaseDropdown'
import BaseButton from '~/components/UI/BaseButton'
import BaseInput from '~/components/UI/BaseInput'

export default {
  name: 'index',
  components: {
    BaseInput,
    BaseButton,
    BaseDropdown
  },
  data () {
    return {
      categoryData: [],
      answer: null,
    }
  }
}
</script>

<style scoped lang="scss">
.form-container {
  width: 80%;

  form::v-deep {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: toRem(40);
    grid-row-gap: toRem(40);
    padding: 0 toRem(50);
    margin-top: toRem(50);

    .category {
      grid-row: 1/2;
      grid-column: 1/2;
      max-height: toRem(75);
    }
    .answer {
      grid-row: 1/2;
      grid-column: 2/3;
      height: 100%;
      max-height: toRem(75);
    }

    .register-setting {
      width: 100%;
      grid-row: 2/3;
      grid-column: 1/3;
      @extend .justify-center;
      &_btn {
        max-width: toRem(400);
      }
    }
  }
}

</style>
