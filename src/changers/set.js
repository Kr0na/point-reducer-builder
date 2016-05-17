/**@flow*/
import type {PointReducer} from '../types'

export function set(field: string, value: any): PointReducer {
  return state => {
    return {
      ...state,
      [field]: value
    }
  }
}
