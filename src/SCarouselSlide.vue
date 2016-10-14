<template>
  <div class="s-carousel-slide" :style="style">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ComponentMixin from './mixins/ComponentMixin';

export default {
  name: 's-carousel-slide',
  mixins: [ComponentMixin],
  data: () => ({
    width: 100,
  }),
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

<style lang="sass" scoped>
@import './styles/imports';

.s-carousel-slide {
  flex: auto 0 0;
  position: relative;

  .content {
    overflow: hidden;
    @include overlay;
  }
}
</style>
