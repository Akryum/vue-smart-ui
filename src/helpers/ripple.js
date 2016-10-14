/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 * removed jQuery
 *
 * Version: 1.0.3
 */

function startRipple(eventType, event) {
  let holder = event.currentTarget;
  if (!holder.classList.contains('s-ripple')) {
    const select = holder.querySelector('.s-ripple');
    if (!select) {
      var rippleContainer = document.createElement('div');
      rippleContainer.className = 's-ripple';
      holder.appendChild(rippleContainer);
      holder._rippleContainer = rippleContainer;
      holder = rippleContainer;
    } else {
      holder = select;
    }
  }

  const parent = holder.parentNode;
  if(parent.style.position === '' || parent.style.position === 'static') {
    parent.style.position = 'relative';
  }

  parent.classList.add('s-ripple-container');

  // Store the event use to generate this ripple on the holder: don't allow
  // further events of different types until we're done. Prevents double-
  // ripples from mousedown/touchstart.
  var prev = holder.getAttribute('data-ui-event');
  if (prev && prev !== eventType) {
    return;
  }
  holder.setAttribute('data-ui-event', eventType);
  // Create and position the ripple
  var rect = holder.getBoundingClientRect();
  var x = event.offsetX;
  var y;
  if (x !== undefined) {
    y = event.offsetY;
  } else {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }
  var ripple = document.createElement('div');
  var max;
  if (rect.width === rect.height) {
    max = rect.width * 1.412;
  } else {
    max = Math.sqrt(
      (rect.width * rect.width) + (rect.height * rect.height)
    );
  }
  if (max > 150) {
    max = 150;
  }
  var dim = (max * 2) + 'px';
  ripple.style.width = dim;
  ripple.style.height = dim;
  ripple.style.marginLeft = -max + x + 'px';
  ripple.style.marginTop = -max + y + 'px';
  // Activate/add the element
  ripple.className = 'ripple';
  holder.appendChild(ripple);
  setTimeout(function() {
    ripple.classList.add('held');
  }, 0);
  var releaseEvent = (eventType === 'mousedown' ? 'mouseup' : 'touchend');
  var release = function() {
    document.removeEventListener(releaseEvent, release);
    ripple.classList.add('done');
    // Larger than the animation duration in CSS
    setTimeout(function() {
      holder.removeChild(ripple);
      if (!holder.children.length) {
        holder.classList.remove('active');
        holder.removeAttribute('data-ui-event');
      }
    }, 450);
  };
  document.addEventListener(releaseEvent, release);
};

export function handleMouseDown(e) {
  // Trigger on left click only
  if (e.button === 0) {
    startRipple(e.type, e);
  }
};

export function handleTouchStart(e) {
  if (e.changedTouches) {
    for (var i = 0; i < e.changedTouches.length; ++i) {
      startRipple(e.type, e.changedTouches[i]);
    }
  }
};
