/**@flow*/
import {arrayReplace} from 'point-one'

function selectArray(idProperty:string, handlers:Array<Function>, state:Array<Object>, event:Object):Array<Object> {
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

function selectObject(name:string, handlers:Array<Function>, state:Object, event:Object):Object {
  const
    element = state[name],
    newElement = handlers.reduce((el, handler) => handler(el, event), element)
  return Object.is(element, newElement) ? state : {...state, [name]: newElement}
}

export function select(idProperty: string|(() => string), ...handlers:Array<Function>):(state:any, event:{type:string})=>any {
  return (state, event:Object) => {
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
