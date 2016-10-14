<template>
  <div class="docs docs-switch">
    <doc-page title="Switch" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<s-switch>Enable sound</s-switch>
`;

const snippet_simple = `
<s-switch v-model="enabled">Enable sound</s-switch>
<p><s-icon :icon="enabled ? 'volume_up' : 'volume_off'"></s-icon></p>
`;

const snippet_position = `
<s-switch label-position="right">Enable sound</s-switch>
<s-switch label-position="left">Enable sound</s-switch>
`;

const snippet_no_ripple = `
<s-switch no-ripple>Enable sound</s-switch>
`;

export default {
  name: 'docs-switch',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Simple switch', code: snippet_simple, data: () => ({
        enabled: true,
      }) },
      { label: 'Label position', code: snippet_position },
      { label: 'No ripple ink', code: snippet_no_ripple },
    ],
  }),
};
</script>

<style lang="sass">
.docs-switch {
  .s-button {
    margin-bottom: 4px;
  }
}
</style>