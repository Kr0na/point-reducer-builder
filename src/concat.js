/**@flow*/
import type {PointReducer} from './types'

export function concat(...handlers: Array<PointReducer>): PointReducer {
  return (state, event) => (
    handlers.reduce((newState, handler) => handler(newState, event), state)
  )
}
