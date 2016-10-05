<template>
  <div class="carousel">
    <div class="content">
      <div class="slides" :style="slidesStyle">
        <slot></slot>
      </div>
    </div>
    <div class="buttons">
      <div class="previous-btn">
        <s-icon-button color="primary" icon="&#xE5C4;" :tooltip="previousToolip" @click="activatePreviousItem"></s-icon-button>
      </div>
      <div class="next-btn">
        <s-icon-button color="primary" icon="&#xE5C8;" :tooltip="nextToolip" @click="activateNextItem"></s-icon-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previousToolip: {
      type: String,
      default: 'Précédent',
    },
    nextToolip: {
      type: String,
      default: 'Suivant',
    },
    index: {
      type: Number,
      default: 0,
    },
    displayCount: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      slides: [],
      slideWidth: 0,
    };
  },
  watch: {
    slides() {
      this.updateSlideWidth();
    },
  },
  computed: {
    indexMax() {
      return this.slides.length - this.displayCount;
    },
    slidesStyle() {
      return {
        left: `${-this.index * this.slideWidth}px`,
      };
    },
  },
  methods: {
    activateNextItem() {
      this.changeIndex(this.index + 1);
    },
    activatePreviousItem() {
      this.changeIndex(this.index - 1);
    },
    changeIndex(val) {
      if (val > this.indexMax) {
        val = 0;
      } else if (val < 0) {
        val = this.indexMax;
      }
      this.index = val;
      this.updateSlideWidth();
    },
    updateSlideWidth() {
      const el = this.$el;
      const carouselWidth = el.offsetWidth;
      this.slideWidth = Math.ceil(carouselWidth / this.displayCount);
      for (const slide of this.slides) {
        slide.width = this.slideWidth;
      }
    },
  },
  ready() {
    this.updateSlideWidth();
    window.addEventListener('resize', this.updateSlideWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateSlideWidth);
  },
};
</script>

<style lang="less" scoped>
@import "~style/vars.less";
@import "~style/mixins.less";

.carousel {
  height: 200px;
  position: relative;

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;

    .slides {
      position: absolute;
      top: 0;
      bottom: 0;
      .h-box;
      transition: left 0.3s;
    }
  }

  .previous-btn, .next-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    .v-box;
    .box-center;
  }

  .previous-btn {
    left: -20px;
  }

  .next-btn {
    right: -20px;
  }
}
</style>
