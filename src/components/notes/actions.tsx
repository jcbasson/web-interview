export const SET_NOTES = 'SET_NOTES'
export const CLEAR_NOTES = 'CLEAR_NOTES';

export const setNotes = (notes: string) => {
  return { type: SET_NOTES, notes }
}

export const clearNotes = () => {
    return { type: CLEAR_NOTES};
}