'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;
function concat() {
  for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  return function (state, event) {
    return handlers.reduce(function (newState, handler) {
      return handler(newState, event);
    }, state);
  };
}