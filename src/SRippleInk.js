import { handleMouseDown, handleTouchStart } from './helpers/ripple';

function addBindingsToElement(element) {
  element.addEventListener('mousedown', handleMouseDown);
  element.addEventListener('touchstart', handleTouchStart);
  element.classList.add('has-ripple');
}

function removeBindingsFromElement(element) {
  element.removeEventListener('mousedown', handleMouseDown);
  element.removeEventListener('touchstart', handleTouchStart);
  if(element._rippleContainer) {
    element.removeChild(element._rippleContainer);
    delete element._rippleContainer;
  }
  element.classList.remove('has-ripple');
}

export default {
  inserted(el) {
    addBindingsToElement(el);
  },
  unbind(el) {
    removeBindingsFromElement(el);
  },
};
