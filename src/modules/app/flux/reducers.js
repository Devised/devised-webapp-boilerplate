import { types } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    //
    // Something
    //
    case types.something:
      return {
        ...state,
        data: action.data
      }
    //
    // Default
    //
    default:
      return state
  }
}
