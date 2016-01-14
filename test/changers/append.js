/**@flow*/
import {assert} from 'chai'
import {append} from '../../src/index'

describe('changers', () => {
  describe('append', () => {
    it('should append value to array', () => {
      const
        state = [
          {id:0}
        ],
        newState = append()(state, {id:1})
      assert.lengthOf(state, 1)
      assert.lengthOf(newState, 2)
      assert.deepPropertyVal(newState, '[0].id', 0)
      assert.deepPropertyVal(newState, '[1].id', 1)
    })
    it('should create array if empty', () => {
      const newState = append()(undefined, {id:0})
      assert.lengthOf(newState, 1)
      assert.deepPropertyVal(newState, '[0].id', 0)
    })
    it('should append value to object', () => {
      const
        state = {
          '0': {id:0}
        },
        newState = append('id')(state, {id:1})
      assert.deepPropertyVal(newState, '0.id', 0)
      assert.deepPropertyVal(newState, '1.id', 1)
    })
    it('should create object if empty', () => {
      const newState = append('id')(undefined, {id:0})
      assert.deepPropertyVal(newState, '0.id', 0)
    })
  })
})
