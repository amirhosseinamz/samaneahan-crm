<template>
  <div class="setting-container">
    <div class="add-new">
      <base-button mode="primary" classes="add-new_btn" link to="/dashboard/setting/add">
        افزودن بازخورد
      </base-button>
    </div>
    <base-table>
      <tr>
        <td style="width: 220px">
          دسته بندی
        </td>
        <td>
          پاسخ
        </td>

      </tr>
    </base-table>
  </div>
</template>

<script>
import BaseTable from '~/components/UI/BaseTable'
import BaseButton from '~/components/UI/BaseButton'

export default {
  name: 'index',
  middleware: 'authentication',
  transition: {
    name: 'paging',
    mode: 'out-in'
  },
  components: {
    BaseButton,
    BaseTable
  }
}
</script>

<style scoped lang="scss">
.paging-enter-active, .paging-leave-active { transition: all .4s; }
.paging-enter, .paging-leave-active { opacity: 0; transform: translateY(-50px) }
.setting-container {
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
