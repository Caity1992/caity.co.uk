/* global pub events debug */

// Send On any addEventListener
pub.on = function(type, selector, cb) {
  if (-1 < events.indexOf([type, selector, cb].toString())) {
    return;
  }

  events.push([type, selector, cb].toString());

  window.addEventListener(type, function(event) {
    var target = event.target.closest(selector);

    if (null === target) {
      return;
    }

    var callback = cb.bind(target);

    callback(event);
  });
};

pub.insertAfter = function(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

// Send Events Handler
pub.sendEvent = function(name, tags) {
  var obj = {
    type: 'event',
    eventName: name
  };

  if (tags !== undefined) {
    obj.tags = tags;
  }

  window.optimizely = window.optimizely || [];
  window.optimizely.push(obj);
  if (debug) {
    console.log('WSJ NAME', name);
  }
};

pub.trackingCodes = function(selector, tracking_code) {
  var buttons = document.querySelectorAll(selector);

  for (var i = 0; i < buttons.length; i++) {
    var url = buttons[i].getAttribute('href');
    var joiner = -1 < url.indexOf('?') ? '&' : '?';

    if (-1 === url.indexOf(tracking_code)) {
      var n = url + joiner + tracking_code;

      buttons[i].setAttribute('href', n.replace('&&', '&'));
    }
  }
};
