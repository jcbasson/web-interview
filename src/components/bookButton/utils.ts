import _ from 'lodash'
import { createSelector } from 'reselect'
import { BookButtonTypes } from './types'

export const getBookingData = () => {
  return createSelector(
    [getUserId, getDateTime, getNotes, getType, getAppointmentType],
    getBooking
  )
}

const getBooking: BookButtonTypes.Utils.GetBookingData = (
  userId,
  time,
  notes,
  consultantType,
  appointmentType,
) => ({
  userId,
  time,
  notes,
  consultantType,
  appointmentType,
})

export const isBookingAvailable: BookButtonTypes.Utils.isBookingAvailable = bookingData => {
  return (
    !_.isNil(_.get(bookingData, 'userId')) &&
    !_.isNil(_.get(bookingData, 'time')) &&
    !_.isNil(_.get(bookingData, 'consultantType')) &&
    !_.isEmpty(_.get(bookingData, 'appointmentType'))
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

const getType: BookButtonTypes.Utils.GetConsultantType = state => {
  return _.get(state, 'consultantType')
}

const getAppointmentType: BookButtonTypes.Utils.GetAppointmentType = state => {
    return _.get(state, 'appointmentType', [])
}