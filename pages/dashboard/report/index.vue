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
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>

        </td>
        <td>

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
  components: { BaseTable, BaseButton }
}
</script>

<style scoped lang="scss">
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
