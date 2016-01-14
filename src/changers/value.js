/**@flow*/

export function value(field:?string|?(state:any, event:any)=>any):(state:any, event:any)=>any {
  if (field) {
    return (state, event) => typeof field == 'function'
      ? field(state, event)
      : event[field]
  } else {
    return (state, event) => event
  }
}
