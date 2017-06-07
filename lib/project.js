'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.project = project;


/**
 * Modify event object to your needs. It can be helpful to modify response from
 * server or remove type variable
 * For example:
 *   let event = {
 *     type: SOME_ACTION,
 *     payload: {
 *       id: 0, name: 'Some'
 *     }
 *   }
 * Reducer:
 *  let someReducer = project(event => event.data, select('id', update('name'))
 */
function project(projectGetter) {
  for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    handlers[_key - 1] = arguments[_key];
  }

  return function (state, event) {
    if (typeof projectGetter == 'string') {
      var name = projectGetter;
      projectGetter = function projectGetter(e) {
        return e[name];
      };
    }
    event = projectGetter(event);
    return handlers.reduce(function (newState, handler) {
      return handler(newState, event);
    }, state);
  };
}