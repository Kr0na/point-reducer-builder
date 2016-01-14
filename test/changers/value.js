/**@flow*/
import {assert} from 'chai'
import {value} from '../../src/index'

describe('changers', () => {
  describe('value', () => {
    it('should return event if not field', () => {
      const
        newState = value()({}, {id:0})
      assert.deepEqual(newState, {id:0})
    })
    it('should return event field', () => {
      const
        newState = value('value')({}, {value: 'test', foo: 'bar'})
      assert.equal(newState, 'test')
    })
    it('should call callback for field', () => {
      const
        newState = value((_, e) => e.foo)({}, {value: 'test', foo: 'bar'})
      assert.equal(newState, 'bar')
    })
  })
})
