<template>
  <div class="docs docs-ripple">
    <doc-page title="Ripple" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<div v-s-ripple></div>
`;

const snippet_image = `
<span v-s-ripple>
  <img src="http://vuejs.org/images/logo.png" width="100" height="100" />
</span>
`;

export default {
  name: 'docs-ripple',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Works on any content', code: snippet_image },
    ],
  }),
};
</script>

<style lang="sass">
.docs-ripple {
  .demo span {
    background: #eee;
    border-radius: 3px;
    padding: 4px;
  }
}
</style>