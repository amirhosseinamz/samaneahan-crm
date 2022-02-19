<template>
  <div class="form-container">
    <form>
      <base-dropdown @valueHandler="dropdownValHandler" class="category" :list="categories" place-holder="نام دسته بندی"></base-dropdown>
      <base-input v-model="answer" class="answer" place-holder="پاسخ"></base-input>
      <div class="register-setting">
        <base-button class="register-setting_btn primary" @button-clicked="submitForm">
          ذخیره
        </base-button>
      </div>

    </form>
    <base-table>
      <tr>
        <td style="width: 220px">
          دسته بندی
        </td>
        <td>
          پاسخ
        </td>
        <td>
          حذف
        </td>
      </tr>
      <tr v-for="feedback in feedbacks">
        <td style="width: 220px">
          {{ feedbackCategoryName(feedback.category) }}
        </td>
        <td>
          {{ feedback.answer }}
        </td>
        <td>
          <base-button classes="view-btn" mode="secondary" @button-clicked="deleteFeedback(feedback.id)">
            حذف
          </base-button>
        </td>
      </tr>
    </base-table>
  </div>
</template>

<script>
import BaseDropdown from '~/components/UI/BaseDropdown'
import BaseButton from '~/components/UI/BaseButton'
import BaseInput from '~/components/UI/BaseInput'
import BaseTable from '~/components/UI/BaseTable'

export default {
  name: 'index',
  transition: {
    name: 'paging',
    mode: 'out-in'
  },
  components: {
    BaseTable,
    BaseInput,
    BaseButton,
    BaseDropdown
  },
  data () {
    return {
      answer: null,
      categoriesNames: [],
      dropdownVal: null,
    }
  },
  computed: {
    categories() {
      return this.$store.getters['setting/setting/categoryData'];
    },
    feedbacks() {
      return this.$store.getters['setting/setting/feedbacksData'];
    }
  },
  async asyncData({ store }) {
    await store.dispatch('setting/setting/getFeedback');
  },
  watch: {
    dropdownVal(val) {
      console.log(val)
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('setting/setting/setFeedback', {
        feedback_category: this.dropdownVal,
        feedback_answer: this.answer,
      });

    },
    feedbackCategoryName(value){
      return this.categories.find(item => item.value === value).name;
    },
    dropdownValHandler(val) {
      this.dropdownVal = val.value;
    },
    deleteFeedback(id) {
      this.$store.dispatch('setting/setting/deleteFeedback', id);
    }
  }
}
</script>

<style scoped lang="scss">
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
.form-container {
  width: 80%;
  padding: 0 toRem(50);
  @include xl {
    padding: toRem(25);
  }
  tr ::v-deep {
    color: $white;
    td {
      .view-btn {
        width: toRem(100);
        height: toRem(40);
        font-size: toRem(14);
      }
    }
  }
  form::v-deep {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: toRem(40);
    grid-row-gap: toRem(40);
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
