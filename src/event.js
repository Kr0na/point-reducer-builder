/**@flow*/

export function event(type:RegExp|(()=>string)|string, ...handlers:Array<(state:any, event:{type:string})=>any>):(state:any, event:{type:string})=>any {
  if (type instanceof RegExp) {
    return (state, event) => type.test(event.type)
      ? handlers.reduce((newState, handler) => handler(newState, event), state)
      : state
  } else if (typeof type == 'function') {
    return (state, event) => type(state, event)
      ? handlers.reduce((newState, handler) => handler(newState, event), state)
      : state
  } else {
    return (state, event) => event.type === type
      ? handlers.reduce((newState, handler) => handler(newState, event), state)
      : state
  }
}
