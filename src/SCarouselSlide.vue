<template>
  <div class="carousel-slide" :style="style">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
  },
  computed: {
    style() {
      return {
        width: `${this.width}px`,
      };
    },
  },
  created() {
    this.$parent.slides.push(this);
  },
  beforeDestroy() {
    const index = this.$parent.slides.indexOf(this);
    if (index !== -1) {
      this.$parent.slides.splice(index, 1);
    }
  },
};
</script>

<style lang="less" scoped>
@import "~style/mixins.less";

.carousel-slide {
  flex: auto 0 0;
  position: relative;

  .content {
    overflow: hidden;
    .overlay;
  }
}
</style>
