/**@flow*/

export type Event = {
  [key: string]: any
};

export type PointReducer = (state: any, event: Event) => any;
