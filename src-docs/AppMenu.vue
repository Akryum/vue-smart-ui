<template>
  <nav class="app-menu">
    <div class="header">Vue Smart UI</div>
    <router-link v-for="route in routes" class="link" :to="route" :exact="route.meta.exact">{{ route.meta.label }}</router-link>
  </nav>
</template>

<script>
import { routes } from './routes';

export default {
  data: () => ({
    routes,
  }),
};
</script>

<style lang="sass" scoped>
@import "./styles/imports";

nav {
  width: 130px;
  @include v-box;
  background: #f8f8f8;
  border-right: solid 1px #eee;
  overflow-x: hidden;
  overflow-y: auto;
  
  .header, .link {
    padding: 2px 6px;
  }
  
  .header {
    color: #999;
    margin-top: 4px;
  }
  
  .link {
    &.router-link-active {
      background: $md-blue;
      color: white;
    }
  }
}
</style>