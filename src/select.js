/**@flow*/
import type {PointReducer} from '../flow/types'
import {arrayReplace} from 'point-one'

function selectArray(idProperty: string, handlers: Array<PointReducer>, state: Array<Object>, event: Object): Array<Object> {
  if (event[idProperty] != null) {
    const
      index = state.findIndex(item => item[idProperty] == event[idProperty])
    if (index !== -1) {
      const
        element = state[index],
        newElement = handlers.reduce((el, handler) => handler(el, event), element)
      return Object.is(element, newElement) ? state : arrayReplace(state, index, newElement)
    }
  }
  return state
}

function selectObject(name: string, handlers: Array<PointReducer>, state: Object, event: Object): Object {
  const
    element = state[name],
    newElement = handlers.reduce((el, handler) => handler(el, event), element)
  return Object.is(element, newElement) ? state : {...state, [name]: newElement}
}

export function select(idProperty: string|(() => string), ...handlers: Array<PointReducer>): PointReducer {
  return (state, event) => {
    if (typeof idProperty == 'function') {
      idProperty = idProperty(state, event)
    }
    if (Array.isArray(state)) {
      return selectArray(idProperty, handlers, state, event)
    } else {
      return selectObject(idProperty, handlers, state, event)
    }
  }
}
