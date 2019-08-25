export const SET_TIME_SLOT = 'SET_TIME_SLOT'
export const CLEAR_TIME_SLOT = 'CLEAR_TIME_SLOT';

export const setTimeSlot = (timeSlot: number) => {
  return { type: SET_TIME_SLOT, timeSlot }
}

export const clearTimeSlot = () => ({type: CLEAR_TIME_SLOT});