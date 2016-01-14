/**@flow*/
import {assert} from 'chai'
import {concat, event, events, init, project, select, append, remove, update, value} from '../src/index'

describe('Mock Test', () => {
  it('quick test', () => {
    const
      someReducer = concat(
        //Select with updating on event
        select(
          'firstName',
          events(
            event('RENAME', value('firstName')),
            init('Alex')
          )
        ),
        //Update Object value on event
        event('RENAME', update('lastName')),
        event('RENAME',
          //Update Object value with changed event
          project(
            e => ({name: `${e.firstName} ${e.lastName}`}),
            update('name')
          )
        ),
        //Update Object value by selecting, changing and returning changed event
        select(
          'name2',
          event(
            'RENAME',
            project(
              e => `${e.firstName} ${e.lastName}`,
              value()
            )
          )
        ),
        //Namespaced Events
        event(
          /^USER_/,
          //Selecting Users array
          select('users',
            //Append user to array
            event(
              'USER_ADD',
              project(e => e.data, append())
            ),
            //Update User in array
            event(
              'USER_UPDATE',
              project(e => e.data, select('id', update()))
            ),
            //Removing user from array
            event(
              'USER_REMOVE',
              project(e => e.data, remove('id'))
            )
          )
        )
      ),
      state = {
        lastName: 'Grand',
        name: 'Alex Grand'
      },
      renameState = someReducer(state, {type: 'RENAME', firstName: 'Foo', lastName: 'Bar'}),
      userAddState = someReducer(state, {type: 'USER_ADD', data: {id: 0, name: 'Test'}}),
      userUpdateState = someReducer(userAddState, {type: 'USER_UPDATE', data: {id: 0, name: 'Arilas'}}),
      userRemoveState = someReducer(userUpdateState, {type: 'USER_REMOVE', data: {id:0}})
    assert.propertyVal(renameState, 'name', 'Foo Bar')
    assert.propertyVal(renameState, 'name2', 'Foo Bar')
    assert.propertyVal(userAddState, 'firstName', 'Alex')
    assert.deepPropertyVal(userAddState, 'users[0].id', 0)
    assert.deepPropertyVal(userAddState, 'users[0].name', 'Test')
    assert.deepPropertyVal(userUpdateState, 'users[0].name', 'Arilas')
    assert.lengthOf(userRemoveState.users, 0)
  })
})
