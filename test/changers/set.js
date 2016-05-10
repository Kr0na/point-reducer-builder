/**@flow*/
import {assert} from 'chai'
import {set} from '../../src/index'

describe('changers', () => {
  describe('set', () => {
    it('should set element to object', () => {
      const
        state = {
          foo: 'bar'
        },
        newState = set('foo', 'test')(state, {})
      assert.propertyVal(state, 'foo', 'bar')
      assert.propertyVal(newState, 'foo', 'test')
    })
  })
})
