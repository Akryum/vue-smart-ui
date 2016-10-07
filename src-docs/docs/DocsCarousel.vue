<template>
  <div class="docs docs-carousel">
    <doc-page title="Carousel" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<s-carousel>
  <s-carousel-slide>
    Slide 1
  </s-carousel-slide>
  <s-carousel-slide>
    Slide 2
  </s-carousel-slide>
</s-carousel>
`;

const snippet_simple = `
<s-carousel display-count="3">
  <s-carousel-slide>
    <img src="http://placehold.it/323x200/ff5555/ffffff?text=1" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="http://placehold.it/323x200/55ff55/ffffff?text=2" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="http://placehold.it/323x200/5555ff/ffffff?text=3" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="http://placehold.it/323x200/ffff55/ffffff?text=4" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="http://placehold.it/323x200/55ffff/ffffff?text=5" />
  </s-carousel-slide>
</s-carousel>
`;

const snippet_model = `
<p><s-text-input type="number" v-model="index"></s-text-input></p>

<s-carousel v-model="index">
  <s-carousel-slide>
    <img src="https://placehold.it/323x200/ff5555/ffffff?text=1" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="https://placehold.it/323x200/55ff55/ffffff?text=2" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="https://placehold.it/323x200/5555ff/ffffff?text=3" />
  </s-carousel-slide>
</s-carousel>
`;

const snippet_custom_buttons = `
<s-carousel button-class="primary medium">
  <s-carousel-slide>
    <img src="https://placehold.it/323x200/ff5555/ffffff?text=1" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="https://placehold.it/323x200/55ff55/ffffff?text=2" />
  </s-carousel-slide>
  <s-carousel-slide>
    <img src="https://placehold.it/323x200/5555ff/ffffff?text=3" />
  </s-carousel-slide>
</s-carousel>
`;

export default {
  name: 'docs-carousel',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Add some CarouselSlide', code: snippet_simple },
      { label: 'Current index with v-model', code: snippet_model, data: () => ({
        index: 0,
      }) },
      { label: 'Customize buttons', code: snippet_custom_buttons },
    ],
  }),
};
</script>

<style lang="sass">
.docs-carousel {
  .demo {
    padding: 0 20px;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>