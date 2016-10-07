<template>
  <button class="s-component s-icon-button s-action s-widget s-interactive s-click s-small-components" :type="type" v-s-ripple="!noRipple">
    <div class="s-button-content">
      <s-icon v-if="icon" :icon="icon"></s-icon>
    </div>
  </button>
</template>

<script>
import ButtonMixin from './mixins/ButtonMixin.js';

export default {
  name: 's-icon-button',
  mixins: [ButtonMixin],
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
@import './styles/imports';

.s-icon-button {
  background: none;
  outline: none;
  border: none;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.3s;
  @include unselectable;

  .s-icon {
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    height: initial;
    font-size: 22px !important;
  }

  background-color: #ccc;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #bbb;
  }
  
  &.medium {
    width: 40px;
    height: 40px;
    
    .s-icon {
      font-size: 24px !important;
    }
  }
  
  &.big {
    width: 56px;
    height: 56px;
    
    .s-icon {
      font-size: 32px !important;
    }
  }
}
</style>
