<template>
  <div class="s-component s-text-input s-interactive s-small-components" :class="componentClass">
    <div class="s-text-input-content">
      <s-icon v-if="iconLeft" :icon="iconLeft" class="button-icon position-left"></s-icon>
      <input class="s-text-input-dom-input s-input" :type="type" :placeholder="placeholder" v-model="currentValue" @focus="focus = true" @blur="focus = false"/>
      <s-icon v-if="iconRight" :icon="iconRight" class="button-icon position-right"></s-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    iconLeft: String,
    iconRight: String,
  },
  data: () => ({
    focus: false,
  }),
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    componentClass() {
      return {
        focus: this.focus,
        empty: !this.currentValue || this.currentValue.length === 0,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import './styles/imports.less';

.s-text-input {
  display: inline-block;
  transition: background 0.3s, border 0.3s;
}

.s-text-input-content {
  .h-box;
  .box-center;
}

.s-text-input-dom-input {
  flex: auto 1 1;
}
</style>
