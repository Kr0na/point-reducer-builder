'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _types = require('./types');

/**
 * Example:
 * select(
 *  'value',
 *  events(
 *    event('SOME_EVENT', ...),
 *    event('SOME_ANOTHER', ...),
 *    init('default Value')
 *  )
 * )
 */
function init(value) {
  var inited = false;
  return function (state) {
    if (inited) {
      return state;
    }
    inited = true;
    if (state === undefined) {
      return value;
    }
    return state;
  };
}