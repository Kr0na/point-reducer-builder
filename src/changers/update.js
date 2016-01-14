/**@flow*/

export function update(...fields:Array<string>):Function {
  if (fields.length) {
    return (state, event) => (
      fields.reduce((newState, field) => {
        if (event.hasOwnProperty(field) && event[field] != newState[field]) {
          newState = {
            ...newState,
            [field]: event[field]
          }
        }
        return newState
      }, state)
    )
  } else {
    return (state, event) => (
      {
        ...state,
        ...event
      }
    )
  }
}
