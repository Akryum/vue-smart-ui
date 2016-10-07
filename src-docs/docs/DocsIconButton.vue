<template>
  <div class="docs docs-icon-button">
    <doc-page title="IconButton" :snippet="snippet_basic">
      <doc-example v-for="demo in demos" :label="demo.label" v-model="demo.code" :data-hook="demo.data" lang="html"></doc-example>
    </doc-page>
  </div>
</template>

<script>
const snippet_basic = `
<s-icon-button icon="add"></s-icon-button>
`;

const snippet_button = `
<s-icon-button icon="home"></s-icon-button>
<s-icon-button icon="add" class="primary"></s-icon-button>
<s-icon-button icon="grade" class="special"></s-icon-button>
<s-icon-button icon="done" class="good"></s-icon-button>
<s-icon-button icon="feedback" class="warning"></s-icon-button>
<s-icon-button icon="delete" class="bad"></s-icon-button>
`;

const snippet_flat = `
<s-icon-button icon="home" class="flat"></s-icon-button>
<s-icon-button icon="add" class="flat primary"></s-icon-button>
<s-icon-button icon="grade" class="flat special"></s-icon-button>
<s-icon-button icon="done" class="flat good"></s-icon-button>
<s-icon-button icon="feedback" class="flat warning"></s-icon-button>
<s-icon-button icon="delete" class="flat bad"></s-icon-button>
`;

const snippet_medium = `
<s-icon-button icon="home" class="medium"></s-icon-button>
<s-icon-button icon="add" class="medium primary"></s-icon-button>
<s-icon-button icon="grade" class="medium special"></s-icon-button>
<s-icon-button icon="done" class="medium good"></s-icon-button>
<s-icon-button icon="feedback" class="medium warning"></s-icon-button>
<s-icon-button icon="delete" class="medium bad"></s-icon-button>
`;


const snippet_big = `
<s-icon-button icon="home" class="big"></s-icon-button>
<s-icon-button icon="add" class="big primary"></s-icon-button>
<s-icon-button icon="grade" class="big special"></s-icon-button>
<s-icon-button icon="done" class="big good"></s-icon-button>
<s-icon-button icon="feedback" class="big warning"></s-icon-button>
<s-icon-button icon="delete" class="big bad"></s-icon-button>
`;

const snippet_no_ripple = `
<s-icon-button icon="add" no-ripple></s-icon-button>
`;

export default {
  name: 'docs-icon-button',
  data: () => ({
    snippet_basic,
    demos: [
      { label: 'Simple icon button', code: snippet_button },
      { label: 'Flat button', code: snippet_flat },
      { label: 'Bigger button', code: snippet_medium },
      { label: 'Even bigger button', code: snippet_big },
      { label: 'No ripple ink', code: snippet_no_ripple },
    ],
  }),
};
</script>

<style lang="sass">
.docs-icon-button {
  .s-icon-button {
    margin-bottom: 4px;
  }
}
</style>