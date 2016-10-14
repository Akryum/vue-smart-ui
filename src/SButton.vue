<template>
  <button class="s-component s-button s-action s-widget s-interactive s-click s-small-components" :class="componentClass" :type="type" v-s-ripple="!noRipple">
    <div class="s-button-content">
      <s-icon v-if="iconLeft" :icon="iconLeft" class="s-button-icon position-left"></s-icon>
      <slot></slot>
      <s-icon v-if="iconRight" :icon="iconRight" class="s-button-icon position-right"></s-icon>
    </div>
  </button>
</template>

<script>
import ComponentMixin from './mixins/ComponentMixin';
import ButtonMixin from './mixins/ButtonMixin';
import RippleMixin from './mixins/RippleMixin';
import SIcon from './SIcon';

export default {
  name: 's-button',
  mixins: [ComponentMixin, ButtonMixin, RippleMixin],
  components: {
    SIcon,
  },
  props: {
    iconLeft: String,
    iconRight: String,
  },
  computed: {
    componentClass() {
      return {
        empty: !this.$slots.default,
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import './styles/imports';

.s-button {
  transition: background-color 0.3s;
  position: relative;
  touch-action: manipulation; // IE
  cursor: default;
  line-height: 1;
  overflow: hidden;
  display: inline-block;
  height: 28px;
  vertical-align: middle;
  @include unselectable;

  .s-button-content {
    @include h-box;
    @include box-center;
    height: 100%;
  }

  .s-button-icon {
    font-size: 16px !important;
    
    &.position-left {
      margin-right: 4px;
      margin-left: -2px;
    }
    
    &.position-right {
      margin-left: 4px;
      margin-right: -2px;
    }
  }

  &.empty {
    .s-icon {
      margin-right: -2px;
    }
  }
}
</style>
