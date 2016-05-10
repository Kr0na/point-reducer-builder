/**@flow*/
import type {PointReducer} from '../flow/types'

/**
 * For example if you need some default behavior for some element for example
 */
export function events(...handlers: Array<PointReducer>): PointReducer {
  return (state, event) => {
    let skip = false
    function found() {
      skip = true
    }
    return handlers.reduce(
      (newState, handler) => skip
        ? newState
        : handler(newState, event, found),
      state
    )
  }
}
