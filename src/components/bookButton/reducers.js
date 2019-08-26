import _ from 'lodash'
import { BOOKING_REQUESTED, BOOKING_COMPLETED } from './actions'

export const bookingsReducer = (state = [], action) => {
  switch (action.type) {
    case BOOKING_REQUESTED:
      return { ...state, requestSent: true, bookingCompleted: false }
    case BOOKING_COMPLETED:
      return { ...state, requestSent: false, bookingCompleted: true }
    default:
      return state
  }
}
