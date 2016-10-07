import SmartUi from '../';

export default {
  props: {
    type: {
      type: String,
      default: 'submit',
    },
    noRipple: {
      type: Boolean,
      default: () => !SmartUi.config.ripple,
    },
  },
};