export const SET_NOTES = 'SET_NOTES'

export function setNotes(notes: string) {
  return { type: SET_NOTES, notes }
}