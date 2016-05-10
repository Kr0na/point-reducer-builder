/**@flow*/
import type {PointReducer} from '../../flow/types'

export function value(field: ?string|(state: any, event: any) => any): PointReducer {
  if (field) {
    return (state, event) => typeof field == 'function'
      ? field(state, event)
      : field && event[field] || null
  } else {
    return (state, event) => event
  }
}
