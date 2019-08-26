import * as React from 'react'
import styled from 'styled-components'
import { User } from '../user';
import { ConsultantTypes } from '../consultantTypes';
import { TimeSlots } from '../timeSlots';
import { AppointmentTypes } from '../appointmentTypes';
import { Notes } from '../notes';
import { BookButton } from '../bookButton'

export const Appointment = () => {
  return (
    <>
      <SubHeader>New appointment</SubHeader>
      <User></User>
      <LayoutDivider></LayoutDivider>
      <ConsultantTypes></ConsultantTypes>
      <TimeSlots></TimeSlots>
      <AppointmentTypes></AppointmentTypes>
      <Notes></Notes>
      <LayoutDivider></LayoutDivider>
      <BookButton></BookButton>
    </>
  )
}

const SubHeader = styled.h2`
  font-size: 30px;
  font-family: sans-serif;
`

const LayoutDivider = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: #dddddd;
  height: 1px;
`
