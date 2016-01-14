/**@flow*/

/**
 * Modify event object to your needs. It can be helpful to modify response from
 * server or remove type variable
 * For example:
 *   let event = {
 *     type: SOME_ACTION,
 *     payload: {
 *       id: 0, name: 'Some'
 *     }
 *   }
 * Reducer:
 *  let someReducer = project(event => event.data, select('id', update('name'))
 */
export function project(projectGetter:Function, ...handlers:Array<Function>):Function {
  return (state, event) => {
    event = projectGetter(event)
    return handlers.reduce((newState, handler) => handler(newState, event), state)
  }
}
