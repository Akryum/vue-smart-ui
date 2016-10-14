<template>
  <div class="docs docs-checkbox">
    <doc-page title="Checkbox" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<s-checkbox>Enable sound</s-checkbox>
`;

const snippet_simple = `
<s-checkbox v-model="enabled">Enable sound</s-checkbox>
<p><s-icon :icon="enabled ? 'volume_up' : 'volume_off'"></s-icon></p>
`;

const snippet_position = `
<s-checkbox label-position="right">Enable sound</s-checkbox>
<s-checkbox label-position="left">Enable sound</s-checkbox>
`;

const snippet_no_ripple = `
<s-checkbox no-ripple>Enable sound</s-checkbox>
`;

export default {
  name: 'docs-checkbox',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Simple checkbox', code: snippet_simple, data: () => ({
        enabled: true,
      }) },
      { label: 'Label position', code: snippet_position },
      { label: 'No ripple ink', code: snippet_no_ripple },
    ],
  }),
};
</script>

<style lang="sass">
.docs-checkbox {
  .s-button {
    margin-bottom: 4px;
  }
}
</style>