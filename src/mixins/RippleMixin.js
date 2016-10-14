import SmartUi from '../';

export default {
  props: {
    noRipple: {
      type: Boolean,
      default: () => !SmartUi.bus.ripple,
    },
  },
};