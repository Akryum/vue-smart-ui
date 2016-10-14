<template>
  <div class="docs docs-button">
    <doc-page title="Button" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<s-button>Action</s-button>
`;

const snippet_button = `
<s-button>Action</s-button>
<s-button class="primary">Primary</s-button>
<s-button class="special">Special</s-button>
<s-button class="good">Good</s-button>
<s-button class="warning">Warning</s-button>
<s-button class="bad">Bad</s-button>
`;

const snippet_flat = `
<s-button class="flat">Action</s-button>
<s-button class="flat primary">Primary</s-button>
<s-button class="flat special">Special</s-button>
<s-button class="flat good">Good</s-button>
<s-button class="flat warning">Warning</s-button>
<s-button class="flat bad">Bad</s-button>
`;

const snippet_icon = `
<s-button icon-left="lock">Login</s-button>
<s-button icon-right="lock">Login</s-button>
`;

const snippet_no_ripple = `
<s-button no-ripple>No ripple</s-button>
`;


export default {
  name: 'docs-button',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Simple button', code: snippet_button },
      { label: 'Flat button', code: snippet_flat },
      { label: 'With icon', code: snippet_icon },
      { label: 'No ripple ink', code: snippet_no_ripple },
    ],
  }),
};
</script>

<style lang="sass">
.docs-button {
  .s-button {
    margin-bottom: 4px;
  }
}
</style>