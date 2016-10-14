<template>
  <div class="docs docs-tabs">
    <doc-page title="Tabs" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<s-tabs>
  <s-tab label="Tab 1">
    Content of tab 1
  </s-tab>
  <s-tab label="Tab 2">
    Content of tab 2
  </s-tab>
</s-tabs>
`;

const snippet_simple = `
<s-tabs>
  <s-tab label="Tab 1">
    Content of tab 1
  </s-tab>
  <s-tab label="Tab 2">
    Content of tab 2
  </s-tab>
</s-tabs>
`;

const snippet_icons = `
<s-tabs>
  <s-tab label="Store" icon="store">
    Content of tab 1
  </s-tab>
  <s-tab label="Cart" icon="shopping_cart">
    Content of tab 2
  </s-tab>
</s-tabs>
`;

const snippet_expands = `
<s-tabs class="expand-tabs">
  <s-tab label="Tab 1">
    Content of tab 1
  </s-tab>
  <s-tab label="Tab 2">
    Content of tab 2
  </s-tab>
  <s-tab label="Tab 3">
    Content of tab 3
  </s-tab>
</s-tabs>
`;

const snippet_model = `
<p><s-text-input type="number" v-model="index"></s-text-input></p>

<s-tabs v-model="index">
  <s-tab label="Tab 1">
    Content of tab 1
  </s-tab>
  <s-tab label="Tab 2">
    Content of tab 2
  </s-tab>
  <s-tab label="Tab 3">
    Content of tab 3
  </s-tab>
</s-tabs>
`;

const snippet_dynamic = `
<p>
  <s-button @click.native="connected = !connected">
    {{ connected ? 'Logout' : 'Login' }}
  </s-button>
</p>

<s-tabs>
  <s-tab label="Home">
    Content of Home
  </s-tab>
  <s-tab label="My Orders" v-if="connected">
    Content of My Orders
  </s-tab>
  <s-tab label="About">
    Content of About
  </s-tab>
</s-tabs>
`;

const snippet_no_ripple = `
<s-tabs no-ripple>
  <s-tab label="Tab 1">
    Content of tab 1
  </s-tab>
  <s-tab label="Tab 2">
    Content of tab 2
  </s-tab>
</s-tabs>
`;

export default {
  name: 'docs-tabs',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Add some Tab', code: snippet_simple },
      { label: 'With icons', code: snippet_icons },
      { label: 'Expanded Tabs', code: snippet_expands },
      { label: 'Current tab with v-model', code: snippet_model, data: () => ({
        index: 0,
      }) },
      { label: 'Dynamic tabs', code: snippet_dynamic, data: () => ({
        connected: false,
      }) },
      { label: 'No ripple ink', code: snippet_no_ripple },
    ],
  }),
};
</script>

<style lang="sass">
.docs-tabs {
  .demo {
    padding: 0 20px;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>