/**@flow*/
import {assert} from 'chai'
import {project} from '../src/index'

describe('project', () => {
  it('should change event and send it to handlers by order', () => {
    const
      myReducer = project(
        event => event.payload,
        (state, data) => ({...state, ...data, foo: 'foo'}),
        (state, data) => ({...state, ...data, foo: 'bar'}),
      ),
      event = {
        type: 'MY_EVENT',
        payload: {
          id: 0,
          name: 'test'
        }
      },
      result = myReducer({}, event)
    assert.propertyVal(result, 'foo', 'bar')
    assert.propertyVal(result, 'id', 0)
    assert.notProperty(result, 'type')
  })
})
