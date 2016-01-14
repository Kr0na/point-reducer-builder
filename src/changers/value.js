/**@flow*/

export function value(field:?string|()=>any):(state:any, event:any)=>any {
  if (field) {
    return (state, event) => typeof field == 'function'
      ? field(state, event)
      : event[field]
  } else {
    return (state, event) => event
  }
}
