/**@flow*/

export function concat(...handlers:Array<(state:any, event:{type:string})=>any>):(state:any, event:{type:string})=>any {
  return (state, event) => (
    handlers.reduce((newState, handler) => handler(newState, event), state)
  )
}
