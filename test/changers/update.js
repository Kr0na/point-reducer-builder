/**@flow*/
import {assert} from 'chai'
import {update} from '../../src/index'

describe('changers', () => {
  describe('update', () => {
    it('should update object with fields', () => {
      const
        state = {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        newState = update('a', 'b')(state, {b:'2', c:'3'})
      assert.propertyVal(state, 'a', 'a')
      assert.propertyVal(state, 'b', 'b')
      assert.propertyVal(state, 'c', 'c')
      assert.propertyVal(newState, 'a', 'a')
      assert.propertyVal(newState, 'b', '2')
      assert.propertyVal(newState, 'c', 'c')
    })
    it('should update object with all fields', () => {
      const
        state = {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        newState = update()(state, {b:'2', c:'3'})
      assert.propertyVal(state, 'a', 'a')
      assert.propertyVal(state, 'b', 'b')
      assert.propertyVal(state, 'c', 'c')
      assert.propertyVal(newState, 'a', 'a')
      assert.propertyVal(newState, 'b', '2')
      assert.propertyVal(newState, 'c', '3')
    })
  })
})
