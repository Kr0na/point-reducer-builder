/**@flow*/
import {arrayAppend} from 'point-one'

export function append(idProperty:?string):(state:?Array<Object>|Object, event:any)=>any {
  return (state, event) => {
    if (idProperty && idProperty != "" && !Array.isArray(state)) {
      if (state == null) {
        state = {}
      }
      return {
        ...state,
        [event[idProperty]]: event
      }
    } else {
      if (!Array.isArray(state)) {
        return [event]
      } else {
        return arrayAppend(state, event)
      }
    }
  }
}
