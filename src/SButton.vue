<template>
  <button class="s-component s-button s-action s-widget s-interactive s-click s-small-components" :class="componentClass" :type="type">
    <div class="s-button-content">
      <s-icon v-if="icon" :icon="icon" :class="'button-icon position-' + iconPosition"></s-icon>
      <slot></slot>
    </div>
  </button>
</template>

<script>
import SIcon from './SIcon';

export default {
  name: 's-button',
  components: {
    SIcon,
  },
  props: {
    type: {
      type: String,
      default: 'submit',
    },
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
    },
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

<style lang="less" scoped>
@import './styles/imports.less';

.s-button {
  font-family: @font-family;
  border: none;
  padding: @button-padding @button-padding * 1.5;
  transition: background-color 0.3s;
  position: relative;
  touch-action: manipulation; // IE
  cursor: default;
  line-height: 1;
  overflow: hidden;
  display: inline-block;
  height: 28px;
  vertical-align: middle;

  .s-button-content {
    .h-box;
    .box-center;
    height: 100%;
  }

  background-color: #ccc;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #bbb;
  }

  .s-icon {
    margin-right: 4px;
    margin-left: -2px;
    font-size: 16px !important;
    margin-top: 2px;
  }

  &.empty {
    .s-icon {
      margin-right: -2px;
    }
  }
}
</style>
