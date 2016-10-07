<template>
  <div class="carousel">
    <div class="content">
      <div class="slides" :style="slidesStyle">
        <slot></slot>
      </div>
    </div>
    <div class="buttons">
      <div class="previous-btn">
        <s-icon-button :class="buttonClass" icon="arrow_back" :tooltip="previousToolip" @click.native="activatePreviousItem"></s-icon-button>
      </div>
      <div class="next-btn">
        <s-icon-button :class="buttonClass" icon="arrow_forward" :tooltip="nextToolip" @click.native="activateNextItem"></s-icon-button>
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
    value: {
      default: 0,
    },
    displayCount: {
      default: 1,
    },
    buttonClass: {
      default: '',
    },
  },
  data() {
    return {
      slides: [],
      slideWidth: 0,
      index: 0,
    };
  },
  watch: {
    slides() {
      this.updateSlideWidth();
    },
    value(val) {
      this.changeIndex(val, false);
    },
    displayCount(val) {
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
    changeIndex(val, dispatch = true) {
      if (val > this.indexMax) {
        val = 0;
      } else if (val < 0) {
        val = this.indexMax;
      }
      this.index = val;
      if(dispatch) {
        this.$emit('input', this.index);
      }
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
  mounted() {
    this.updateSlideWidth();
    window.addEventListener('resize', this.updateSlideWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateSlideWidth);
  },
};
</script>

<style lang="sass" scoped>
@import './styles/imports';

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
      @include h-box;
      transition: left 0.3s;
    }
  }

  .previous-btn, .next-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    @include v-box;
    @include box-center;
  }

  .previous-btn {
    left: -20px;
  }

  .next-btn {
    right: -20px;
  }
}
</style>
