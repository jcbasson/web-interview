import { SET_NOTES, CLEAR_NOTES } from './actions'

export const notesReducer = (state = '', action) => {
  switch (action.type) {
    case SET_NOTES:
      const { notes } = action
      return notes
    case CLEAR_NOTES:
      return ''
    default:
      return state
  }
}
