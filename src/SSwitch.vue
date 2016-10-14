<template>
  <div class="s-switch s-component s-toggle" :class="componentClasses">
    <label class="content" v-s-ripple="!noRipple">
      <input class="s-dom-checkbox" type="checkbox" :value="currentValue" @change="toggle"  @focus="focused = true" @blur="focused = false" />
      <div class="check-mark"></div>
      <div class="label" v-if="!hideLabel">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import SCheckbox from './SCheckbox.vue';
export default {
  name: 's-switch',
  extends: SCheckbox,
  props: {
    labelPosition: {
      type: String,
      default: 'left',
    },
  },
}
</script>

<style lang="sass" scoped>
@import './styles/imports';

.s-switch {
  display: inline-block;
}

.content {
  @include h-box;
  align-items: center;
  height: 32px;
}

.label {
  flex: auto 1 1;
}

.check-mark, .label {
  margin: 0 4px;
}

.label-position-left {
  .content {
    flex-direction: row-reverse;
  }
}

</style>