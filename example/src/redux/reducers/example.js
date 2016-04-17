const INPUT = 'redux-debounce-example/example/INPUT'

const initialState = ''

const reducer = ( state = initialState, action = {} ) => {
  switch ( action.type ) {
    case INPUT:
      return action.payload
    default:
      return state
  }
}

export const input = payload => ({
  meta: {
    debounce: 'simple',
  },
  payload,
  type: INPUT,
})

export default reducer
