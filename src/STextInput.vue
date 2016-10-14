<template>
  <div class="s-component s-text-input s-interactive s-small-components" :class="componentClass">
    <div class="s-text-input-content">
      <s-icon v-if="iconLeft" :icon="iconLeft" class="s-text-input-icon position-left"></s-icon>
      <div class="s-input-container">
        <slot name="before"></slot>
        <div class="s-text-input-dom-input-container">
          <input class="s-text-input-dom-input s-input" :type="type" :placeholder="placeholder" v-model="currentValue" @focus="focus = true" @blur="focus = false"/>
        </div>
        <slot name="after"></slot>
      </div>
      <s-icon v-if="iconRight" :icon="iconRight" class="s-text-input-icon position-right"></s-icon>
    </div>
  </div>
</template>

<script>
import ComponentMixin from './mixins/ComponentMixin';

export default {
  name: 's-text-input',
  mixins: [ComponentMixin],
  props: {
    value: {},
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

<style lang="sass" scoped>
@import "./styles/imports";

.s-text-input {
  display: inline-block;
  transition: background 0.3s, border 0.3s;
  vertical-align: middle;
}

.s-text-input-content {
  @include h-box;
  @include box-center;
}

.s-input-container {
  flex: auto 1 1;
  @include h-box;
  align-items: center;
}

.s-text-input-dom-input-container {
  flex: auto 1 1;
}

.s-text-input-dom-input {
  width: 100%;
  box-sizing: border-box;
}
</style>
