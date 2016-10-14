<template>
    <div class="s-tab" role="tabpanel" :tabindex="active ? '0' : null"
        :aria-hidden="!active ? 'true' : null" v-show="active"
    >
        <slot></slot>
    </div>
</template>

<script>
import ComponentMixin from './mixins/ComponentMixin';
import CoupledChild from './mixins/CoupledChild';

export default {
  name: 's-tab',
  mixins: [ComponentMixin, CoupledChild(['s-tab'])],
  props: {
    label: String,
    icon: String,
  },
};
</script>