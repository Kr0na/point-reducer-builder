'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.append = append;

var _pointOne = require('point-one');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function append(idProperty) {
  return function (state, event) {
    if (idProperty && idProperty != "" && !Array.isArray(state)) {
      if (state == null) {
        state = {};
      }
      return _extends({}, state, _defineProperty({}, event[idProperty], event));
    } else {
      if (!Array.isArray(state)) {
        return [event];
      } else {
        return (0, _pointOne.arrayAppend)(state, event);
      }
    }
  };
}