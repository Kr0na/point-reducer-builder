# Reducer Builder for Point One or Redux
When you use Point One or Redux many of your reducers have many code with closer
functionality. But you put it each time and sometimes you copy it to new places
and forget to change something.

Just look at your code and count places where you:
1. Find Index of element in array
2. Replace/Update/Remove elements from array

And after this look at this code:

```js
let todoReducer = event(
  /TODO_/,
  select(
    'users',
    event(
      'TODO_ADD',
      append
    ),
    event(
      'TODO_UPDATE',
      project(
        e => e.data,
        select('id', update())
      )
    ),
    event(
      'TODO_REMOVE',
      project(e => e.data, remove('id'))
    ),
    event(
      'TODO_DONE',
      project(
        e => e.data,
        select(
          'id',
          set('done', true)
        )
      )
    )
  )
)
```
