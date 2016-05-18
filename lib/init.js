'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _types = require('./types');

var initEvent = /@@[a-z]+\/INIT/;
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
  return function (state, event) {
    if (inited && !initEvent.test(event.type)) {
      return state;
    }
    inited = true;
    if (state === undefined) {
      return value;
    }
    return state;
  };
}