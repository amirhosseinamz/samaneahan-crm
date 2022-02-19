<template>
  <div class="sidebar-container">
    <div class="desktop-content">
      <h1 class="title">
        داشبورد
      </h1>
      <section class="body">
        <ul class="tools-list">
          <li class="tools-list_item" ref="listItem" :class="{ 'active': item.selected }"
              v-for="(item, index) in listData" :key="item.id" @click="selectItem(index)"
          >
            <i :class="item.icons"></i>
            <nuxt-link :to="item.link">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </section>
      <div v-if="userName" class="user-name">
        <div class="logout" v-if="logoutIsShown" @click="logout">
          خروج از حساب
        </div>
        <div class="txt" @click="showLogout">
          {{ userName }}
        </div>

      </div>
    </div>
    <div v-if="!isOpen" class="mobile-content close">
      <div class="collapse-icon">
        <i class="collapse-menu bi bi-list" @click="toggleSidebar"></i>
      </div>
      <section class="body">
        <ul class="tools-list">
          <li class="tools-list_item" ref="listItem" v-for="(item, index) in listData" :key="item.id"
              @click="selectItem(index)"
          >
            <i :class="item.icons"></i>
          </li>
        </ul>
      </section>
    </div>
    <div v-else class="mobile-content open">
      <div class="backdrop" @click="backdropClick"></div>
      <h1 class="title">
        داشبورد
      </h1>
      <section class="body">
        <ul class="tools-list">
          <li class="tools-list_item" ref="listItem" :class="{ 'active': item.selected }"
              v-for="(item, index) in listData" :key="item.id" @click="selectItem(index)"
          >
            <i :class="item.icons"></i>
            <nuxt-link :to="item.link">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      listData: [
        {
          id: 1,
          title: 'دسترسی سریع',
          link: '/dashboard/access',
          selected: true,
          icons: 'bi bi-window-dock',
        },
        {
          id: 2,
          title: 'ثبت فرم گزارش',
          link: '/dashboard/report',
          selected: false,
          icons: 'bi bi-envelope-paper-fill'

        },
        {
          id: 3,
          title: 'کارمندان',
          link: '/dashboard/employees',
          selected: false,
          icons: 'bi bi-person-workspace'

        },
        {
          id: 4,
          title: 'کاربران',
          link: '/dashboard/users',
          selected: false,
          icons: 'bi bi-person-fill'

        },
        {
          id: 5,
          title: 'تعریف مشتری جدید',
          link: '/dashboard/customer',
          selected: false,
          icons: 'bi bi-person-check-fill'

        },
        {
          id: 6,
          title: 'تنظیمات',
          link: '/dashboard/setting',
          selected: false,
          icons: 'bi bi-gear-fill'

        },
      ],
      isOpen: false,
      logoutIsShown: false,
    }
  },
  async mounted() {
    await this.$store.dispatch('authentication/authentication/getUser');

    let routeName = this.$route.name.split('-')[1];
    for (let i = 0; i < this.listData.length; i++) {
      if (this.listData[i].link.split('/')[2] === routeName) {
        this.deleteSelectedItem();
        this.listData[i].selected = true;
      }
    }
  },
  methods: {
    selectItem(index) {
      this.deleteSelectedItem();
      this.listData[index].selected = true;
      this.isOpen = false;
    },
    deleteSelectedItem() {
      for (let i = 0; i < this.listData.length; i++) {
        this.listData[i].selected = false
      }
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    backdropClick() {
      this.isOpen = false;
    },
    showLogout() {
      this.logoutIsShown = !this.logoutIsShown;
    },
    logout() {
      this.$store.dispatch('authentication/authentication/logout');
    }
  },
  computed: {
    userName() {
      return this.$store.getters["authentication/authentication/userName"];
    }
  },

}
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  pointer-events: auto;
}

.sidebar-container {
  color: $white;
  height: 100%;

  .user-name {
    padding-right: toRem(30);
    position: absolute;
    bottom: toRem(30);
    color: $yellow;
    .txt {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .logout {
      padding: toRem(15);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: toRem(15);
      position: relative;
      bottom: toRem(15);
      background-color: $dark-3;
      cursor: pointer;
      &:before {
        content: " ";
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: toRem(20) toRem(20) 0 toRem(20);
        border-color: $dark-3 transparent transparent transparent;
        position: absolute;
        bottom: toRem(-14);
        right: toRem(59);
      }
    }

  }

  .desktop-content {
    width: 20%;
    padding: toRem(50) 0;
    min-width: toRem(260);
    background-color: $dark-2;
    height: 100vh;

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

          i {
            color: $white;
            font-size: toRem(20);
          }

          a {
            width: 100%;
            height: 100%;
            padding: toRem(15) toRem(12);

          }

          &.active {
            background: $yellow;
            padding-right: toRem(15);

            i {
              color: $dark;
            }

            a {
              color: $dark;
            }
          }
        }
      }
    }
  }

  .mobile-content {
    display: none;
  }

  @include lg {
    position: absolute;
    z-index: 20;
    display: flex;
    align-items: center;
    flex-direction: column;
    .desktop-content {
      display: none;
    }
    .mobile-content {
      transition: all 0.1s ease-out;
      height: 100vh;

      &.close {
        min-width: unset;
        padding: toRem(50) 0;
        height: 100%;
        width: toRem(80);
        display: flex;
        align-items: center;
        background-color: $dark-2;
        flex-direction: column;

        .collapse-menu {
          font-size: toRem(35);
        }

        .body {
          .tools-list {
            margin-top: toRem(60);

            &_item {
              width: 100%;
              margin-top: toRem(20);

              i {
                font-size: toRem(22);
              }
            }
          }
        }
      }

      &.open {
        display: block;
        width: toRem(300);
        background-color: $dark-2;
        padding: toRem(50) 0;
        height: 100%;

        .backdrop {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(3px);
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          z-index: -1;
          pointer-events: auto;
        }

        .title {
          padding: 0 toRem(40);
        }

        .body {
          margin-top: toRem(40);
          padding: 0 toRem(26);

          .tools-list {
            @include display-flex();
            flex-direction: column;

            &_item {
              @include display-flex();
              align-items: center;
              margin-top: toRem(20);
              font-size: toRem(16);
              border-radius: toRem(15);
              cursor: pointer;

              i {
                color: $white;
                font-size: toRem(20);
              }

              a {
                width: 100%;
                height: 100%;
                padding: toRem(15) toRem(12);

              }

              &.active {
                background: $yellow;
                padding-right: toRem(15);

                i {
                  color: $dark;
                }

                a {
                  color: $dark;
                }
              }
            }
          }
        }
      }

    }
  }
}
</style>
