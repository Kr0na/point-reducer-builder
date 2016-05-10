'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;

var _types = require('../../flow/types');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function update() {
  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  if (fields.length) {
    return function (state, event) {
      return fields.reduce(function (newState, field) {
        if (event.hasOwnProperty(field) && event[field] != newState[field]) {
          newState = _extends({}, newState, _defineProperty({}, field, event[field]));
        }
        return newState;
      }, state);
    };
  } else {
    return function (state, event) {
      return _extends({}, state, event);
    };
  }
}