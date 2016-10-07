<template>
  <div id="app" :class="appClasses">
    <app-menu></app-menu>
    <div class="app-content">
      <div class="app-toolbar">
        <span>
          Theme:
          <select v-model="currentTheme">
            <option v-for="theme in themes">{{theme}}</option>
          </select>
        </span>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from './AppMenu.vue';

export default {
  components: {
    AppMenu,
  },
  data: () => ({
    themes: [
      'none',
      'happy',
      'material',
      'metro',
    ],
    currentTheme: localStorage.getItem('currentTheme') || 'happy',
  }),
  watch: {
    currentTheme(val) {
      localStorage.setItem('currentTheme', val);
    },
  },
  computed: {
    appClasses() {
      return [`theme-${this.currentTheme}`];
    },
  },
};
</script>

<style lang="sass">
@import "src/themes/happy";
@import "src/themes/material";
@import "src/themes/metro";

@import "./styles/imports";

html, body, #app {
  height: 100%;
  overflow: hidden;
}

a {
  cursor: pointer;
}

#app {
  @include h-box;
  align-items: stretch;
}

.app-content {
  flex: 100% 1 1 !important;
  overflow: auto;
}

.app-toolbar {
  padding: 12px;
  border-bottom: solid 1px $md-grey-300;
}
</style>
