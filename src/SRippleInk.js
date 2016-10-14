import { handleMouseDown, handleTouchStart } from './helpers/ripple';

function addBindingsToElement(element) {
  if(!element._hasRipple) {
    element._hasRipple = true;
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('touchstart', handleTouchStart);
    element.classList.add('has-ripple');
    element.classList.add('s-ripple-container');
  }
}

function removeBindingsFromElement(element) {
  element.removeEventListener('mousedown', handleMouseDown);
  element.removeEventListener('touchstart', handleTouchStart);
  if(element._rippleContainer) {
    element.removeChild(element._rippleContainer);
    delete element._rippleContainer;
  }
  element.classList.remove('has-ripple');
  element.classList.remove('s-ripple-container');
  delete element._hasRipple;
}

function updateBindings(el, { value }) {
  if(value || typeof value === 'undefined') {
    addBindingsToElement(el);
  } else {
    removeBindingsFromElement(el);
  }
}

export default {
  inserted: updateBindings,
  update: updateBindings,
  unbind(el, { value }) {
    removeBindingsFromElement(el);
  },
};
