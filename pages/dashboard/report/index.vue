<template>
  <div class="report-container">
    <div class="add-new">
      <base-button mode="primary" classes="add-new_btn" link to="/dashboard/report/add">
        افزودن گزارش جدید
      </base-button>
    </div>
    <base-table>
      <tr>
        <td style="width: 150px">
          مشاهده نظر ادمین
        </td>
        <td>
          مشاهده
        </td>
        <td>
          زمان تماس
        </td>
        <td>
          نام مشتری
        </td>
        <td>
          شماره مشتری
        </td>
        <td>
          نام کارشناس
        </td>
      </tr>
      <tr v-for="report in reportsData">
        <td></td>
        <td></td>
        <td>
          {{ report.created_at }}
        </td>
        <td>
          {{ report.customer.name }}
        </td>
        <td>
          {{ report.customer.mobile }}
        </td>
        <td>
          {{ report.admin.name }}
        </td>
      </tr>
    </base-table>
  </div>
</template>

<script>
import BaseButton from '~/components/UI/BaseButton'
import BaseTable from '~/components/UI/BaseTable'
export default {
  name: 'index',
  components: { BaseTable, BaseButton },
  middleware: 'authentication',
  transition: {
    name: 'paging',
    mode: 'out-in'
  },
  computed: {
    reportsData() {
      return this.$store.getters['report/report/reportsData'];
    }
  },
  async asyncData({ store }) {
    await store.dispatch('report/report/getReports');
  }
}
</script>

<style scoped lang="scss">
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
.report-container {
  .add-new {
    width: 100%;
    margin-top: toRem(50);
    margin-bottom: toRem(20);
    &_btn {
      width: toRem(200);
    }
  }
  padding: 0 toRem(80);
  color: $white;
  @include xl {
    padding: 0 toRem(30);
  }

}
</style>
