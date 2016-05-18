/**@flow*/
import type {PointReducer} from './types'

const initEvent = /@@[a-z]+\/INIT/
/**
 * Example:
 * select(
 *  'value',
 *  events(
 *    event('SOME_EVENT', ...),
 *    event('SOME_ANOTHER', ...),
 *    init('default Value')
 *  )
 * )
 */
export function init(value: any): PointReducer {
  let inited = false
  return (state, event) => {
    if (inited && !initEvent.test(event.type)) {
      return state
    }
    inited = true
    if (state === undefined) {
      return value
    }
    return state
  }
}
