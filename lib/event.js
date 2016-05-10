'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = event;

var _types = require('../flow/types');

function event(type) {
  for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    handlers[_key - 1] = arguments[_key];
  }

  return function (state, event, found) {
    if (type instanceof RegExp) {
      if (type.test(event.type)) {
        state = handlers.reduce(function (newState, handler) {
          return handler(newState, event);
        }, state);
        found && found();
      }
    } else if (typeof type == 'function') {
      if (type(state, event)) {
        handlers.reduce(function (newState, handler) {
          return handler(newState, event);
        }, state);
        found && found();
      }
    } else {
      if (event.type === type) {
        state = handlers.reduce(function (newState, handler) {
          return handler(newState, event);
        }, state);
        found && found();
      }
    }
    return state;
  };
}