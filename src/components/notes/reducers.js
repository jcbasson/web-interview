import { SET_NOTES } from './actions'

export const notesReducer = (state = '', action) => {
  switch (action.type) {
    case SET_NOTES:
      const { notes } = action
      return notes
    default:
      return state
  }
}
