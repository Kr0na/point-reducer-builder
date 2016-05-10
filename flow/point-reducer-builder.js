/**@flow*/
import type {PointReducer} from './types'

declare module 'point-reducer-builder' {
  declare function append(idProperty: ?string): PointReducer;
  declare function remove(idProperty: string): PointReducer;
  declare function set(field: string, value: any): PointReducer;
  declare function update(...fields: Array<string>): PointReducer;
  declare function value(field: ?string|(state: any, event: any) => any): PointReducer;

  declare function concat(...handlers: Array<PointReducer>): PointReducer;
  declare function event(type: RegExp|(()=>string)|string, ...handlers: Array<PointReducer>): PointReducer;
  declare function events(...handlers: Array<PointReducer>): PointReducer;
  declare function init(value: any): PointReducer;
  declare function project(projectGetter: Function|string, ...handlers: Array<PointReducer>): PointReducer;
  declare function select(idProperty: string|(() => string), ...handlers: Array<PointReducer>): PointReducer;
}
