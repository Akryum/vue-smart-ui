<template>
  <button class="s-component s-icon-button s-action s-widget s-interactive s-click s-small-components" :type="type">
    <div class="s-button-content">
      <s-icon v-if="icon" :icon="icon"></s-icon>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'submit',
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
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
}
</style>
