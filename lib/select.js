'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.select = select;

var _pointOne = require('point-one');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function selectArray(idProperty, handlers, state, event) {
  if (event[idProperty] != null) {
    var index = state.findIndex(function (item) {
      return item[idProperty] == event[idProperty];
    });
    if (index !== -1) {
      var element = state[index],
          newElement = handlers.reduce(function (el, handler) {
        return handler(el, event);
      }, element);
      return Object.is(element, newElement) ? state : (0, _pointOne.arrayReplace)(state, index, newElement);
    }
  }
  return state;
}

function selectObject(name, handlers, state, event) {
  var element = state[name],
      newElement = handlers.reduce(function (el, handler) {
    return handler(el, event);
  }, element);
  return Object.is(element, newElement) ? state : _extends({}, state, _defineProperty({}, name, newElement));
}

function select(idProperty) {
  for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    handlers[_key - 1] = arguments[_key];
  }

  return function (state, event) {
    if (typeof idProperty == 'function') {
      idProperty = idProperty(state, event);
    }
    if (Array.isArray(state)) {
      return selectArray(idProperty, handlers, state, event);
    } else {
      return selectObject(idProperty, handlers, state, event);
    }
  };
}