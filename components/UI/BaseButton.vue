<template>
  <button
    v-if="!link"
    :class="[mode, classes]"
    @click="buttonClicked"
    type="button"
  >
    <slot />
  </button>
  <nuxt-link
    v-else
    :to="to"
    :class="[mode, classes]"
    @click="buttonClicked"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      require: false,
      default: false
    },
    to: {
      type: String,
      require: false,
      default: '/'
    },
    mode: {
      type: String,
      require: false,
      default: 'primary',
      validator: value => [
        'primary',
        'gray'
      ].includes(value.toLowerCase())
    },
    classes: {
      type: String,
      require: false,
      default: ''
    }
  },
  methods: {
    buttonClicked () {
      this.$emit('button-clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
button, a {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  border-radius: 16px;
  font-family: inherit;
  border: none;
  width: 100%;
  height: 60px;
  &.primary {
    background-color: $yellow;
    color: $dark-2;
    transition: all 0.1s ease-out;
    &:hover {
      background-color: $yellow-2;
    }
  }
  &.secondary {
    background-color: $dark-3;
    color: $white;
    transition: all 0.1s ease-out;
    &:hover {
      box-shadow: 0 0 toRem(8) 0 rgba(248, 206, 70, 0.3);
    }
  }

}
</style>
