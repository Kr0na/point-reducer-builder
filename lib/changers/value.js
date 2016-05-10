'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = value;

var _types = require('../../flow/types');

function value(field) {
  if (field) {
    return function (state, event) {
      return typeof field == 'function' ? field(state, event) : field && event[field] || null;
    };
  } else {
    return function (state, event) {
      return event;
    };
  }
}