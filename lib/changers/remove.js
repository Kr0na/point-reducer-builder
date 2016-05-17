'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _types = require('../types');

var _pointOne = require('point-one');

function removeArray(idProperty, state, event) {
  if (event.hasOwnProperty(idProperty)) {
    var index = state.findIndex(function (item) {
      return item[idProperty] == event[idProperty];
    });
    if (index != -1) {
      return (0, _pointOne.arrayRemove)(state, index);
    }
  }

  return state;
}

function removeObject(idProperty, state, event) {
  if (state.hasOwnProperty(event[idProperty])) {
    return Object.keys(state).reduce(function (newState, key) {
      if (state[key][idProperty] != event[idProperty]) {
        newState[key] = state[key];
      }
      return newState;
    }, {});
  } else {
    return state;
  }
}

function remove(idProperty) {
  return function (state, event) {
    if (Array.isArray(state)) {
      return removeArray(idProperty, state, event);
    } else {
      return removeObject(idProperty, state, event);
    }
  };
}