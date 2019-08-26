import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { BookButtonTypes } from './types'
import { getBookingData, isBookingAvailable } from './utils'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const BOOK_APPOINTMENT = gql`
    mutation BookAppointment($notes: String, $userId: Int!, $consultantType: String!, $appointmentType: [String]!, $time: String!){
        bookAppointment(notes: $notes, userId: $userId, consultantType: $consultantType, appointmentType: $appointmentType, time: $time) {
            id
        }
    }
`;

export const BookButtonUI: React.FC<BookButtonTypes.UI.IBookButton> = ({
  isAvailable,
  clickHandler,
  bookingData,
}) => {
  return isAvailable ? (
    <>
      <BookAppointmentButton onClick={clickHandler(bookingData)}>
        Book
      </BookAppointmentButton>
    </>
  ) : (
    <>
      <BookAppointmentButton disabled onClick={clickHandler(bookingData)}>
        Book
      </BookAppointmentButton>
    </>
  )
}

const BookAppointmentButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
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
    clickHandler: (bookingData: BookButtonTypes.Data.IBookingData) => () => {
      console.log('bookingData = ', bookingData)
    },
  }
}

export const BookButton = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(BookButtonUI)
