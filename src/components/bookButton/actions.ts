export const BOOKING_REQUESTED = 'BOOKING_REQUESTED'
export const BOOKING_COMPLETED = 'BOOKING_COMPLETED'

export const requestBooking = () => {
  return { type: BOOKING_REQUESTED };
}

export const bookingCompleted = () => {
  return { type: BOOKING_COMPLETED};
}