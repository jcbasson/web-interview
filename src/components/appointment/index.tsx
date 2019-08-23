import * as React from 'react'
import styled from 'styled-components'
import { User } from '../user';

export const Appointment = () => {
  return (
    <>
      <SubHeader>New appointment</SubHeader>
      <User></User>
      <LayoutDivider></LayoutDivider>
      <LayoutDivider></LayoutDivider>
    </>
  )
}

const SubHeader = styled.h2`
  font-size: 24px;
`

const LayoutDivider = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: #dddddd;
  height: 1px;
`
