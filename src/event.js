/**@flow*/
import type {PointReducer} from './types'

export function event(type: RegExp|(()=>string)|string, ...handlers: Array<PointReducer>): PointReducer {
  return (state, event, found) => {
    if (type instanceof RegExp) {
      if (type.test(event.type)) {
        state = handlers.reduce((newState, handler) => handler(newState, event), state)
        found && found()
      }
    } else if (typeof type == 'function') {
      if (type(state, event)) {
        handlers.reduce((newState, handler) => handler(newState, event), state)
        found && found()
      }
    } else {
      if (event.type === type) {
        state = handlers.reduce((newState, handler) => handler(newState, event), state)
        found && found()
      }
    }
    return state
  }
}
