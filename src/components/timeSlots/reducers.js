import { SET_TIME_SLOT, CLEAR_TIME_SLOT } from './actions'

export const timeSlotReducer = (state = null, action) => {
  switch (action.type) {
    case SET_TIME_SLOT:
      const { timeSlot } = action
      return timeSlot

    case CLEAR_TIME_SLOT:
      return null
    default:
      return state
  }
}
