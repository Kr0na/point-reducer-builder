/**@flow*/
import {assert} from 'chai'
import {remove} from '../../src/index'

describe('changers', () => {
  describe('remove', () => {
    it('should remove array element', () => {
      const
        state = [
          {id: 0},
          {id: 1}
        ],
        newState = remove('id')(state, {id: 0})
      assert.lengthOf(state, 2)
      assert.lengthOf(newState, 1)
      assert.deepPropertyVal(newState, '[0].id', 1)
    })
    it('should delete element from object', () => {
      const
        state = {
          '0': {id:0},
          '1': {id:1}
        },
        newState = remove('id')(state, {id: 0})
      assert.deepProperty(state, '0')
      assert.deepProperty(state, '1')
      assert.deepPropertyVal(newState, '[1].id', 1)
      assert.notDeepProperty(newState, '[0]')
    })
  })
})
