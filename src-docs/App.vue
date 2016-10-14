<template>
  <div id="app" :class="appClasses">
    <app-menu></app-menu>
    <div class="app-content">
      <div class="app-toolbar">
        <div class="spacer"></div>
        <span>
          Theme:
          <select v-model="currentTheme">
            <option v-for="theme in themes">{{theme}}</option>
          </select>
        </span>
        <s-switch v-model="rippleEnabled">Ripple</s-switch>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SmartUi from 'vue-smart-ui';
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
    rippleEnabled: {
      get() {
        return SmartUi.bus.ripple;
      },
      set(val) {
        SmartUi.bus.ripple = val;
      },
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
  @include h-box;
  align-items: center;
  
  & > * {
    @include space-between-x(10px);
  }
  
  .spacer {
    flex: 100% 1 1;
  }
}
</style>
