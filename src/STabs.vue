<template>
  <div class="s-tabs s-component s-big s-container">
    <!-- Tabs -->
    <div class="tab-items" role="tablist">
      <div class="tab-item" v-for="(tab, index) in children" ref="tabItems" :class="{active: tab.active}" v-s-ripple="!noRipple" @click="activateChild(index)" @keyup.enter="activateChild(index)" @keyup.left="activateChild(index-1)" @keyup.right="activateChild(index+1)" role="tab" tabindex="0" :aria-controls="`tab-${index}`" :aria-selected="tab.active ? 'true' : null">
        <s-icon class="tab-icon" v-if="tab.icon" :icon="tab.icon"></s-icon>
        <span v-if="tab.label && !hideLabels">{{ tab.label }}</span>
      </div>
    </div>
    
    <!-- Content -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ComponentMixin from './mixins/ComponentMixin';
import CoupledHost from './mixins/CoupledHost';
import RippleMixin from './mixins/RippleMixin';

export default {
  name: 's-tabs',
  mixins: [ComponentMixin, CoupledHost, RippleMixin],
  props: {
    hideLabels: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    childActivated(index, external) {
      if(!external) {
        const item = this.$refs.tabItems[index];
        if(item) {
          item.focus();
        }
      }
    }
  },
};
</script>

<style lang="sass" scoped>
@import './styles/imports';

.tab-items {
  @include h-box;
  @include unselectable;
}

.tab-item {
  display: inline-block;
  height: 32px;
  padding: 0 12px;
  box-sizing: border-box;
  cursor: default;
  @include h-box;
  @include box-center;
  
  .tab-icon {
    margin-right: 4px;
  }
}

.s-tabs {
  &.expand-tabs {
    .tab-item {
      flex: 100% 1 1;
    }
  }
}

</style>