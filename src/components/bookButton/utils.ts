import _ from 'lodash'
import { createSelector } from 'reselect'
import { BookButtonTypes } from './types'

export const getBookingData = () => {
  return createSelector(
    [getUserId, getDateTime, getNotes, getType],
    getBooking
  )
}

const getBooking: BookButtonTypes.Utils.GetBookingData = (
  userId,
  dateTime,
  notes,
  type
) => ({
  userId,
  dateTime,
  notes,
  type,
})

export const isBookingAvailable: BookButtonTypes.Utils.isBookingAvailable = bookingData => {
  return (
    !_.isNil(_.get(bookingData, 'userId')) &&
    !_.isNil(_.get(bookingData, 'dateTime')) &&
    !_.isNil(_.get(bookingData, 'type'))
  )
}

const getUserId: BookButtonTypes.Utils.GetUserId = state => {
  return _.get(state, 'userID')
}

const getDateTime: BookButtonTypes.Utils.GetDateTime = state => {
  return _.get(state, 'timeSlot')
}

const getNotes: BookButtonTypes.Utils.GetNotes = state => {
  return _.get(state, 'notes')
}

const getType: BookButtonTypes.Utils.GetNotes = state => {
  return _.get(state, 'consultantType')
}
