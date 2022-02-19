<template>
  <div class="form-container">
    <form>
      <base-input v-model="userName" class="user-name" place-holder="نام کاربری"></base-input>
      <base-input v-model="password" class="password" place-holder="رمز عبور"></base-input>
      <base-input v-model="userFirstName" class="user-first-name" place-holder="نام"></base-input>
      <base-input v-model="userLastName" class="user-last-name" place-holder="نام خانوادگی"></base-input>
      <base-input v-model="mobile" class="mobile" place-holder="شماره موبایل" type="number"></base-input>
      <div class="birth-date">
        <date-picker placeholder="تاریخ تولد" :column="1" mode="single" v-model="birthDate" clearable></date-picker>
      </div>
      <div class="user-education">
        <base-dropdown @valueHandler="dropdownValHandler" class="dropdown" :list="dropdownList" place-holder="میزان تحصیلات"></base-dropdown>
      </div>
      <section class="checkboxes">
        <div class="checkbox-field">
          <span>ادمین</span>
          <input type="checkbox" id="admin" value="admin" v-model="isAdmin">
        </div>
        <div class="checkbox-field">
          <span>کارمند</span>
          <input type="checkbox" id="developer" value="developer" v-model="isEmployee">
        </div>
        <div class="checkbox-field">
          <span>فنی</span>
          <input type="checkbox" id="tech" name="checkboxes" value="tech" v-model="isDeveloper">
        </div>
      </section>
      <div class="register-user">
        <base-button @button-clicked="submitForm" mode="primary" class="register-user_btn">
          ثبت کاربر
        </base-button>
      </div>

    </form>
  </div>
</template>

<script>
import datePicker from "@alireza-ab/vue-persian-datepicker";
import BaseDropdown from '~/components/UI/BaseDropdown';
import BaseInput from '~/components/UI/BaseInput'
import BaseButton from '~/components/UI/BaseButton'

export default {
  name: 'index',
  middleware: 'authentication',
  components: { BaseButton, datePicker, BaseDropdown, BaseInput},
  data() {
    return {
      userName: null,
      password: null,
      userFirstName: null,
      userLastName: null,
      birthDate: null,
      userEducation: "",
      mobile: null,
      dropdownList: [
        {
          name: "دیپلم",
          value: "دیپلم",
        },{
          name: "لیسانس",
          value: "لیسانس",
        },{
          name: "فوق لیسانس",
          value: "فوق لیسانس",
        },
      ],
      isAdmin: false,
      isDeveloper: false,
      isEmployee: false,
    }
  },
  methods: {
    dropdownValHandler(val) {
      this.userEducation = val;
    },
    submitForm() {
      this.$store.dispatch('authentication/authentication/register',this.employeesData)
    }
  },
  computed: {
    employeesData() {
      let data = {
        username: this.userName,
        password: this.password,
        first_name: this.userFirstName,
        last_name: this.userLastName,
        mobile: this.mobile,
        birth_date: this.birthDate,
        education_rate: this.userEducation.value,
        is_admin: this.isAdmin,
        is_developer: this.isDeveloper,
        is_employee: this.isEmployee
      }
      return data;
    }
  },
  watch: {
    employeesData: {
      immediate: true,
      handler(val) {
        console.log(val)
      },
    }
  },
  transition: {
    name: 'paging',
    mode: 'out-in'
  }
}
</script>

<style scoped lang="scss">
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
.form-container {
  width: 80%;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: toRem(40);
    grid-row-gap: toRem(40);
    padding: 0 toRem(50);
    margin-top: toRem(50);
    @include xl {
      padding: toRem(25);
    }

    .user-name {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .password {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    .mobile {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    .user-first-name {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .user-last-name {

      grid-column: 2/3;
      grid-row: 2/3;
    }
    .birth-date::v-deep {
      grid-column: 2/3;
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
    .user-education {
      grid-column: 1/2;
      grid-row: 4/5;
      width: 100%;
      height: 100%;
      select {
        option {
          padding: toRem(10);
        }
      }
    }
    .checkboxes {
      @extend .align-center;
      .checkbox-field {
        @extend .align-center;
        margin-left: toRem(20);
        span {
          margin-left: toRem(10);
          font-size: toRem(16);
          color: $white;
        }
        input {
          width: toRem(16);
          height: toRem(16);
        }
      }
    }
    .register-user {
      grid-row: 5/6;
      grid-column: 1/3;
      @extend .justify-center;
      &_btn {
        max-width: toRem(400);
      }
    }
  }
}
</style>
