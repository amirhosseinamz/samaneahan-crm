<template>
  <label class="switch">
    <input :value="val" type="checkbox" v-model="model">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "BaseToggle",
  props: {
    val: {
      type: Boolean,
      require: true,
    }
  },
  computed: {
    model: {
      get() { return this.val },
      set(newValue) { this.$emit('input', newValue); }
    },
  }
};
</script>

<style lang="scss" scoped>

.switch {
  position: relative;
  display: inline-block;
  width: toRem(54);
  height: toRem(29);
  border-radius: toRem(40);
  @include sm {
    width: toRem(40);
    height: toRem(20);
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      & + .slider {
        background-color: $yellow;
      }
      & + .slider::before {
        -webkit-transform: translateX(toRem(-23));
        -ms-transform: translateX(toRem(-23));
        transform: translateX(toRem(-23));
        @include sm {
          -webkit-transform: translateX(toRem(-18));
          -ms-transform: translateX(toRem(-18));
          transform: translateX(toRem(-18));
        }
      }
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $dark-4;
    -webkit-transition: .4s;
    transition: .4s;

    &::before {
      position: absolute;
      content: "";
      height: toRem(25);
      width: toRem(26.38);
      right: toRem(2);
      bottom: toRem(2);
      background-color: $white;
      -webkit-transition: .4s;
      transition: .4s;
      @include sm {
        height: toRem(16);
        width: toRem(18);
      }
    }

    &.round {
      border-radius: 2.125rem;
      &::before {
        border-radius: 50%;
      }
    }
  }
}
</style>
