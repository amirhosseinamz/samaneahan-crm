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
        <base-dropdown @valueHandler="callFeedbackValHandler" class="dropdown" :list="callFeedbackList" place-holder="بازخورد تماس"></base-dropdown>
      </div>
      <div class="call-date">
        <date-picker placeholder="تاریخ تماس پیشنهادی" :column="1" mode="single" v-model="callDate" clearable></date-picker>
      </div>
      <div class="final-call-feedback">
        <base-dropdown @valueHandler="finalCallFeedbackValHandler" class="dropdown" :list="finalCallFeedbackList" place-holder="بازخورد نهایی تماس"></base-dropdown>
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
      this.callFeedback = val;
    },
    finalCallFeedbackValHandler(val) {
      this.callFeedback = val;
    },
    async submitForm() {
      await this.$store.dispatch('report/report/sendReport', this.reportData);
    }

  },
  computed: {
    reportData() {
      let reportData = {
        customerName: this.customerName,
        customerMobile: this.customerPhone,
        customerPhone: this.telNumber,
        filmSend: this.video,
        catalogSend: this.catalog,
        callFeedback: this.callFeedback,
        finalCallFeedback: this.finalCallFeedback,
        suggestCallDate: this.callDate,
        employeeFeedback: this.analysis,
      }
      return reportData;
    }
  },
  watch: {
    reportData(val) {
      console.log(val)
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: toRem(40);
    grid-row-gap: toRem(50);
    padding: 0 toRem(50);
    margin-top: toRem(50);
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

      span {
        font-size: toRem(16);
        color: $white;
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
      span {
        font-size: toRem(16);
        color: $white;
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
      height: 100%;
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
    }
    .final-call-feedback {
      grid-column: 3/4;
      grid-row: 4/5;
    }
    .call-date {
      grid-column: 3/4;
      grid-row: 3/4;
      height: toRem(70);
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
    }

    .register-report {
      grid-row: 5/6;
      grid-column: 1/4;
      @extend .justify-center;
      .btn {
        max-width: toRem(400);

      }
    }
  }
}

</style>
