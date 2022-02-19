<template>
  <div class="dropdown" :data-value="value" :data-list="list" :class="{ expanded : visible }">
    <div class="selector" @click="toggle()">
      <div class="label">
        <span>{{ shownVal }}</span>
      </div>
      <div class="arrow" :class="{ expanded : visible }"></div>
      <div :class="{ hidden : !visible, visible }">
        <ul>
          <li :class="{ current : item === value }" v-for="item in list" @click="select(item.name, item.value)">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',
  props: {
    list: {
      type: Array,
      require: true
    },
    placeHolder: {
      type: String,
    }
  },
  data () {
    return {
      value: '',
      visible: false
    }
  },
  methods: {
    toggle () {
        this.visible = !this.visible
    },
    select (name,value) {
      this.value = { name, value }
    }
  },
  computed: {
    shownVal() {
      if (this.value) {
        return this.value.name;
      } else {
        return this.placeHolder;
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.$emit('valueHandler', val)
      }
    },
    placeHolder: {
      handler (val) {
        this.value = val
      }
    }
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  cursor: pointer;
  border-radius: toRem(25);
  background-color: $dark-2;
  width: 100%;
  height: 100%;
  color: $white;
  font-size: toRem(16);
  border: none;

  &.expanded {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.selector {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  @extend .align-center;

  .hidden {
    ul {
      right: 0;

    }
  }

  .visible {
    ul {
      right: 0;
      background-color: $dark-2;
      border: none;
      border-bottom-right-radius: toRem(25);
      border-bottom-left-radius: toRem(25);
      top: 100%;

      li {
        transition: all 0.1s ease;

        &:hover {
          background-color: $yellow;
          color: $dark;
        }
      }
    }
  }

  .arrow {
    position: absolute;
    left: toRem(20);
    top: 50%;
    width: 0;
    height: 0;
    border-left: toRem(7) solid transparent;
    border-right: toRem(7) solid transparent;
    border-top: toRem(10) solid #888;
    transform: rotateZ(0deg) translateY(-50%);
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(.59, 1.39, .37, 1.01);

    &.expanded {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .expanded {
    transform: rotateZ(180deg) translateY(2px);
  }

  .label {
    display: block;
    padding: 12px;
    font-size: 16px;
    color: #888;
  }

  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    border: 1px solid gainsboro;
    position: absolute;
    z-index: 1;

    li {
      padding: 12px;
    }
  }
}


.current {
  //background: #eaeaea;
}

.hidden {
  visibility: hidden;
}

.visible {
  visibility: visible;
}
</style>
