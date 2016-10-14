<template>
  <div class="s-checkbox s-component s-toggle" :class="componentClasses">
    <label class="content" v-s-ripple="!noRipple">
      <input class="s-dom-checkbox" type="checkbox" :value="currentValue" @change="toggle" @focus="focused = true" @blur="focused = false"/>
      <div class="check-mark"></div>
      <div class="label" v-if="!hideLabel">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import ComponentMixin from './mixins/ComponentMixin';
import ToggleMixin from './mixins/ToggleMixin';
import RippleMixin from './mixins/RippleMixin';

export default {
  name: 's-checkbox',
  mixins: [ComponentMixin, ToggleMixin, RippleMixin],
  props: {
    hideLabel: {
      type: Boolean,
      default: false,
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
  },
  data: () => ({
    focused: false,
  }),
  computed: {
    componentClasses() {
      return [
        `label-position-${this.labelPosition}`,
        {
          selected: this.currentValue,
          focus: this.focused,
        },
      ];
    },
  },
}
</script>

<style lang="sass" scoped>
@import './styles/imports';

.s-checkbox {
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