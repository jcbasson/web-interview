import * as React from 'react'
import styled from 'styled-components'
import { connect, batch } from 'react-redux'
import { Dispatch } from 'redux'
import { BookButtonTypes } from './types'
import { getBookingData, isBookingAvailable } from './utils'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { requestBooking, bookingCompleted } from './actions'
import { clearTimeSlot } from '../timeSlots'
import { clearAppointmentType } from '../appointmentTypes'
import { clearNotes } from '../notes';

const BOOK_APPOINTMENT = gql`
  mutation BookAppointment(
    $notes: String
    $userId: Int!
    $consultantType: String!
    $appointmentType: [String]!
    $time: String!
  ) {
    bookAppointment(
      notes: $notes
      userId: $userId
      consultantType: $consultantType
      appointmentType: $appointmentType
      time: $time
    ) {
      id
    }
  }
`

export const BookButtonUI: React.FC<BookButtonTypes.UI.IBookButton> = ({
  isAvailable,
  clickHandler,
  bookingData,
}) => {
  const [bookAppointment, { data }] = useMutation(BOOK_APPOINTMENT)
  return isAvailable ? (
    <>
      <BookAppointmentButton
        onClick={clickHandler(bookAppointment, bookingData)}
      >
        Book
      </BookAppointmentButton>
    </>
  ) : (
    <>
      <BookAppointmentButton
        disabled
        onClick={clickHandler(bookAppointment, bookingData)}
      >
        Book
      </BookAppointmentButton>
    </>
  )
}

const BookAppointmentButton = styled.button`
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  background-color: #58bfa9;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 15px;
  outline: none;
  font-family: sans-serif;
`

const makeMapStateToProps = () => {
  const getBooking = getBookingData()

  return (state: any) => {
    const bookingData = getBooking(state)
    return {
      bookingData,
      isAvailable: isBookingAvailable(bookingData),
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clickHandler: (
      bookAppointment: Function,
      bookingData: BookButtonTypes.Data.IBookingData
    ) => () => {
      dispatch(requestBooking())
      bookAppointment({
        variables: { ...bookingData },
        update: (cache: any, data: any) => {
          if (data) {
            batch(() => {
              dispatch(clearTimeSlot())
              dispatch(clearAppointmentType())
              dispatch(clearNotes())
              dispatch(bookingCompleted())
            })
           
          }
        },
      })
    },
  }
}

export const BookButton = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(BookButtonUI)
