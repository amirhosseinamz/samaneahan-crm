<template>
  <div class="inp-container">
    <textarea v-if="textField" :placeholder="placeHolder" :value="bind" @input="$emit('input', $event.target.value)"></textarea>
    <input v-else :type="type" :placeholder="placeHolder" :value="bind" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    placeHolder: {
      type: String,
      require: false
    },
    bind: {
      type: String,
      require: true,
    },
    textField: {
      type: Boolean,
      require: false,
      default: false,
    },
    type: {
      String,
      require: false,
      dafault: "text"
    }
  },
}
</script>

<style scoped lang="scss">
.inp-container {
  background-color: $dark-2;
  border-radius: toRem(25);
  width: 100%;
  height: toRem(60);
  padding: toRem(18);
  color: $white;
  border: none;
  input, textarea {
    width: 100%;
    height: 100%;
    color: $white;
    background-color: transparent;
    font-size: toRem(16);
    border: none;
    resize: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
