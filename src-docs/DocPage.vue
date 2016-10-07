<template>
  <div class="doc-page">
    <h1 v-if="title">{{ title }}</h1>
    <code-snippet v-if="snippet" class="basic-code" :code="snippet" lang="html"></code-snippet>
    <div class="info">
      <slot name="info"></slot>
    </div>
    
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    snippet: String,
  },
};
</script>

<style lang="sass" scoped>
.basic-code {
  margin: 0 12px;
}
</style>