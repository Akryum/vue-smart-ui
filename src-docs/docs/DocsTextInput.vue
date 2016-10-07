<template>
  <div class="docs docs-text-input">
    <doc-page title="TextInput" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
  
</template>

<script>
const snippet_basic = `
<s-text-input v-model="name"></s-text-input>
`;

const snippet_input = `
<div>Hello {{ name }}!</div>
<s-text-input v-model="name" placeholder="Enter your name"></s-text-input>
`;

const snippet_icon = `
<s-text-input icon-left="account_circle" v-model="name"></s-text-input>
<s-text-input icon-right="account_circle" v-model="name"></s-text-input>
`;

const snippet_custom = `
<s-text-input icon-left="search" v-model="name">
  <template slot="after">
    <s-icon-button icon="add" class="flat"></s-icon-button>
  </template>
</s-text-input>
`;

const data = () => ({
  name: 'world',
});

export default {
  name: 'docs-text-input',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Simple text input', code: snippet_input, data },
      { label: 'With icon', code: snippet_icon, data },
      { label: 'Custom content', code: snippet_custom, data },
    ],
  }),
};
</script>

<style lang="sass">
.docs-text-input {
  .s-text-input {
    margin: 4px 0;
  }
}
</style>