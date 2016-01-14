/**@flow*/
import {assert} from 'chai'
import {event, update} from '../src/index'

describe('event', () => {
  const eventReducer = event(
    'SOME_EVENT',
    update('name')
  )
  it('should process handlers on event', () => {
    const
      originState = {name: 'Test'},
      event = {
        type: 'SOME_EVENT',
        name: 'Foo'
      },
      newState = eventReducer(originState, event)
    assert.propertyVal(newState, 'name', 'Foo')
    assert.notProperty(newState, 'type')
  })
  it ('shout not trigger handlers on another events', () => {
    const
      originState = {name: 'Test'},
      event = {
        type: 'ANOTHER_EVENT',
        name: 'Foo'
      },
      newState = eventReducer(originState, event)
    assert.strictEqual(newState, originState)
  })
})
