/**@flow*/
import {arrayAppend} from 'point-one'

export function append(state:?Array<Object>, event:Object):Array<Object> {
  if (!Array.isArray(state)) {
    return [event]
  } else {
    return arrayAppend(state, event)
  }
}
