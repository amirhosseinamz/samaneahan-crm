<template>
  <div class="form-container">
    <form>
      <base-input v-model="customerName" class="customer-name" place-holder="نام مشتری"></base-input>
      <base-input v-model="customerPhone" class="phone-number" place-holder="شماره مشتری"></base-input>
      <base-input v-model="telNumber" class="tell-number" place-holder="شماره ثابت"></base-input>
      <div class="video-sent">
        <span>
          فیلم فرستاده شد
        </span>
<!--        <input type="checkbox" id="video" name="video" value="video">-->
        <base-toggle :val="video" v-model="video"></base-toggle>

      </div>
      <div class="catalog-sent">
        <span>
          کاتالوگ فرستاده شد
        </span>
<!--        <input type="checkbox" id="catalog" name="catalog" value="catalog">-->
        <base-toggle :val="catalog" v-model="catalog"></base-toggle>
      </div>
      <div class="call-feedback">
        <base-dropdown @valueHandler="callFeedbackValHandler" class="dropdown" :list="feedbackAnswers" place-holder="بازخورد تماس"></base-dropdown>
      </div>
      <div class="call-date">
        <date-picker placeholder="تاریخ تماس پیشنهادی" :column="1" mode="single" v-model="callDate" clearable></date-picker>
      </div>
      <div class="final-call-feedback">
        <base-dropdown @valueHandler="finalCallFeedbackValHandler" class="dropdown" :list="finalAnswers" place-holder="بازخورد نهایی تماس"></base-dropdown>
      </div>
      <base-input v-model="analysis" :text-field="true" class="analysis" place-holder="تحلیل کارشناس"></base-input>


      <div class="register-report">
        <base-button mode="primary" class="btn" @button-clicked="submitForm">
          ثبت گزارش
        </base-button>
      </div>

    </form>
  </div>
</template>

<script>
import BaseInput from '~/components/UI/BaseInput'
import BaseDropdown from '~/components/UI/BaseDropdown'
import BaseButton from '~/components/UI/BaseButton'
import BaseToggle from '~/components/UI/BaseToggle'
import datePicker from "@alireza-ab/vue-persian-datepicker";

export default {
  name: 'index',
  middleware: 'authentication',
  transition: {
    name: 'paging',
    mode: 'out-in'
  },
  components: { BaseToggle, BaseButton, BaseDropdown, BaseInput, datePicker },
  data() {
    return {
      customerName: null,
      customerPhone: null,
      telNumber: null,
      callFeedback: null,
      finalCallFeedback: null,
      catalog: false,
      video: false,
      callDate: null,
      callFeedbackList: [],
      finalCallFeedbackList: [],
      analysis: null,
    };
  },
  methods: {
    callFeedbackValHandler(val) {
      this.callFeedback = val.name;
    },
    finalCallFeedbackValHandler(val) {
      this.finalCallFeedback = val.name;
    },
    async submitForm() {
      await this.$store.dispatch('report/report/sendReport', this.reportData);
    }

  },
  computed: {
    reportData() {
      let reportData = {
        customer_name: this.customerName,
        customer_mobile: this.customerPhone,
        customer_phone: this.telNumber,
        film_send: this.video,
        catalog_send: this.catalog,
        call_feedback: this.callFeedback,
        final_feedback: this.finalCallFeedback,
        suggest_call_date: this.callDate,
        employee_feedback: this.analysis,
      }
      return reportData;
    },
    finalAnswers() {
      return this.$store.getters['report/report/finalAnswers'];
    },
    feedbackAnswers() {
      return this.$store.getters['report/report/feedbackAnswers'];
    }
  },
  async asyncData({ store }) {
    await store.dispatch('report/report/getFeedbacks');
  }

}
</script>

<style scoped lang="scss">
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
.form-container {
  width: 80%;
  @include lg {
    width: calc(100% - toRem(80));
    margin-right: auto;
  }

  form::v-deep {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: toRem(40);
    grid-row-gap: toRem(50);
    padding: 0 toRem(50);
    margin-top: toRem(50);
    @include xl {
      padding: toRem(25);
    }
    @include md {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(6, 1fr);
    }
    @include sm {
      grid-column-gap: toRem(20);
      grid-row-gap: toRem(25);
      padding: 0 toRem(20);
    }
    .customer-name {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .phone-number {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    .tel-number {
      grid-column: 3/4;
      grid-row: 1/2;
      @include md {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }
    .video-sent {
      grid-column: 1/2;
      grid-row: 2/3;
      @extend .align-center;
      justify-content: space-between;
      height: toRem(60);
      border-radius: toRem(25);
      background: $dark-2;
      padding: toRem(18);
      @include md {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      span {
        font-size: toRem(16);
        color: $white;
        @include lg {
          font-size: toRem(14);
        }
      }
      input {
        width: toRem(20);
        height: toRem(20);
        cursor: pointer;
      }
    }
    .catalog-sent {
      grid-column: 2/3;
      grid-row: 2/3;
      @extend .align-center;
      justify-content: space-between;
      height: toRem(60);
      border-radius: toRem(25);
      background: $dark-2;
      padding: toRem(18);
      @include md {
        grid-column: 1/2;
        grid-row: 3/4;
      }
      span {
        font-size: toRem(16);
        color: $white;
        @include lg {
          font-size: toRem(14);
        }
      }
      input {
        width: toRem(20);
        height: toRem(20);
        cursor: pointer;
      }
    }
    .call-feedback,
    .final-call-feedback{
      width: 100%;
      height: toRem(60);
      background-color: $dark-2;
      border-radius: toRem(25);
      @extend .align-center;

      select {
        option {
          padding: toRem(10);
        }
      }
    }
    .call-feedback {
      grid-column: 3/4;
      grid-row: 2/3;
      @include md {
        grid-column: 2/3;
        grid-row: 3/4;
      }
    }
    .final-call-feedback {
      grid-column: 3/4;
      grid-row: 4/5;
      @include md {
        grid-column: 1/2;
        grid-row: 4/5;
      }
    }
    .call-date {
      grid-column: 3/4;
      grid-row: 3/4;
      height: toRem(60);
      @include md {
        grid-column: 2/3;
        grid-row: 4/5;
      }
      .pdp {
        height: 100%;
        color: $white;
        .pdp-group {
          height: 100%;
          @extend .align-center;
          .pdp-pointer {
            height: 100%;
            border-top-right-radius: toRem(25);
            border-bottom-right-radius: toRem(25);
            background-color: $yellow;
            border: none;
            padding-right: toRem(16);
          }
          .pdp-icon {
            @extend .align-center;
          }
          .pdp-clear {
            top: unset;
            z-index: 0;
          }
          .pdp-input {
            height: 100%;
            @extend .align-center;
            background-color: $dark-2;
            border: none;
            border-top-left-radius: toRem(25);
            border-bottom-left-radius: toRem(25);
            color: $white;
          }
        }
      }
    }
    .analysis {
      grid-column: 1/3;
      grid-row: 3/5;
      height: 100%;
      @include md {
        grid-column: 1/3;
        grid-row: 5/6;
      }
    }

    .register-report {
      grid-column: 1/3;
      grid-row: 6/7;
      @extend .justify-center;
      .btn {
        max-width: toRem(400);

      }
    }
  }
}

</style>
