'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = events;


/**
 * For example if you need some default behavior for some element for example
 */
function events() {
  for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  return function (state, event) {
    var skip = false;
    function found() {
      skip = true;
    }
    return handlers.reduce(function (newState, handler) {
      return skip ? newState : handler(newState, event, found);
    }, state);
  };
}