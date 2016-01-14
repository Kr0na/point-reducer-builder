/**@flow*/
import {arrayRemove} from 'point-one'

function removeArray(idProperty:string, state:Array<any>, event:Object):Array<any> {
  if (event.hasOwnProperty(idProperty)) {
    const index = state.findIndex(item => item[idProperty] == event[idProperty])
    if (index != -1) {
      return arrayRemove(state, index)
    }
  }

  return state
}

function removeObject(idProperty:string, state:Object, event:Object):Object {
  if (state[idProperty]) {
    return Object.keys(state).reduce((newState, key) => {
      if (key != idProperty) {
        newState[key] = state[key]
      }
      return newState
    }, {})
  } else {
    return state
  }
}

export function remove(idProperty:string|() => string):Function {
  return (state, event) => {
    if (typeof idProperty == 'function') {
      idProperty = idProperty(state, event)
    }
    if (Array.isArray(state)) {
      return removeArray(idProperty, state, event)
    } else {
      return removeObject(idProperty, state, event)
    }
  }
}
