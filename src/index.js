import 'normalize.css';

import SIcon from './SIcon';
import SButton from './SButton.vue';
import SIconButton from './SIconButton.vue';
import STextInput from './STextInput.vue';

import SRippleInk from './SRippleInk';

const Smart = {
  SIcon,
  SButton,
  SIconButton,
  STextInput,

  SRippleInk,

  install(Vue) {
    Vue.component('s-icon', SIcon);
    Vue.component('s-button', SButton);
    Vue.component('s-icon-button', SIconButton);
    Vue.component('s-text-input', STextInput);

    Vue.directive('s-ripple', SRippleInk);
  }
};

module.exports = Smart;
