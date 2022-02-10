<template>
  <div class="sidebar-container">
    <h1 class="title">
      داشبورد
    </h1>
    <section class="body">
      <ul class="tools-list">
        <li class="tools-list_item" ref="listItem" :class="{ 'active': item.selected }"
            v-for="(item, index) in listData" :key="item.id" @click="selectItem(index)"
        >
          <nuxt-link :to="item.link">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      listData: [
        {
          id: 1,
          title: 'دسترسی سریع',
          link: '/dashboard/access',
          selected: true
        },
        {
          id: 2,
          title: 'ثبت فرم گزارش',
          link: '/dashboard/report',
          selected: false

        },
        {
          id: 3,
          title: 'کارمندان',
          link: '/dashboard/employees',
          selected: false

        },
        {
          id: 4,
          title: 'کابران',
          link: '/dashboard/users',
          selected: false

        },
        {
          id: 5,
          title: 'تعریف مشتری جدید',
          link: '/dashboard/customer',
          selected: false

        },
        {
          id: 6,
          title: 'تنظیمات',
          link: '/dashboard/setting',
          selected: false

        },
      ]
    }
  },
  mounted () {
    let routeName = this.$route.name.split('-')[1]
    for (let i = 0; i < this.listData.length; i++) {
      if (this.listData[i].link.split('/')[2] === routeName) {
        this.deleteSelectedItem();
        this.listData[i].selected = true;
      }
    }
  },
  methods: {
    selectItem (index) {
      this.deleteSelectedItem();
      this.listData[index].selected = true
    },
    deleteSelectedItem() {
      for (let i = 0; i < this.listData.length; i++) {
        this.listData[i].selected = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar-container {
  width: toRem(300);
  padding: toRem(50) 0;
  background-color: $dark-2;
  color: $white;
  height: 100vh;
  min-width: toRem(260);

  .title {
    padding: 0 toRem(40);
  }

  .body {
    margin-top: toRem(40);
    padding: 0 toRem(26);

    .tools-list {
      @extend .d-flex;
      flex-direction: column;

      &_item {
        @extend .align-center;
        margin-top: toRem(20);
        font-size: toRem(16);
        border-radius: toRem(15);
        cursor: pointer;

        a {
          width: 100%;
          height: 100%;
          padding: toRem(15) toRem(12);

        }

        &.active {
          background: $yellow;

          a {
            color: $dark;
          }
        }
      }
    }
  }

}
</style>
