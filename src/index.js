import 'normalize.css';

// Components
import SIcon from './SIcon';
import SButton from './SButton.vue';
import SIconButton from './SIconButton.vue';
import STextInput from './STextInput.vue';
import SCarousel from './SCarousel.vue';
import SCarouselSlide from './SCarouselSlide.vue';

// Directives
import SRippleInk from './SRippleInk';

const SmartUi = {
  // Components
  SIcon,
  SButton,
  SIconButton,
  STextInput,
  SCarousel,
  SCarouselSlide,
  
  // Directives
  SRippleInk,
  
  // Default config
  config: {
    ripple: true,
  },
  
  // Installation
  install(Vue) {
    // Components
    Vue.component('s-icon', SIcon);
    Vue.component('s-button', SButton);
    Vue.component('s-icon-button', SIconButton);
    Vue.component('s-text-input', STextInput);
    Vue.component('s-carousel', SCarousel);
    Vue.component('s-carousel-slide', SCarouselSlide);
    
    // Directives
    Vue.directive('s-ripple', SRippleInk);
    
    SmartUi.bus = new Vue();
  }
};

export default SmartUi;
