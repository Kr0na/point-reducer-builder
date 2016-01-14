/**@flow*/

export function set(field:string, value:any):(state:Object)=>Object {
  return state => {
    return {
      ...state,
      [field]: value
    }
  }
}
