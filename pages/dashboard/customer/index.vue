<template>
  <div class="customer-container">
    <div class="add-new">
      <base-button mode="primary" classes="add-new_btn" link to="/dashboard/customer/add">
        افزودن مشتری جدید
      </base-button>
    </div>
    <base-table>
      <tr>
        <td style="width: 150px">
          نام مشتری
        </td>
        <td>
          شماره همراه
        </td>
        <td>
          شماره ثابت
        </td>
        <td style="width: 350px">
          آدرس
        </td>
        <td>
          مشاهده / ویرایش
        </td>
      </tr>
      <tr>
        <td>امیرحسین</td>
        <td>آموزگار</td>
        <td>1380</td>
        <td>1</td>
        <td>
          <base-button classes="view-btn" mode="secondary">
            مشاهده
          </base-button>
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
.customer-container {
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

    tr ::v-deep {
      td {
        .view-btn {
          width: toRem(100);
          height: toRem(40);
          font-size: toRem(14);
        }
      }
    }
}
</style>
