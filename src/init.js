/**@flow*/

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
export function init(value:any):(state:any)=>any {
  let inited = false
  return state => {
    if (inited) {
      return state
    }
    inited = true
    if (state === undefined) {
      return value
    }
    return state
  }
}
