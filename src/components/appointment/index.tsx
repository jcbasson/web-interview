import * as React from 'react'
import styled from 'styled-components'
import { User } from '../user';
import { ConsultantTypes } from '../consultantTypes';

export const Appointment = () => {
  return (
    <>
      <SubHeader>New appointment</SubHeader>
      <User></User>
      <LayoutDivider></LayoutDivider>
      <ConsultantTypes></ConsultantTypes>
      <LayoutDivider></LayoutDivider>
    </>
  )
}

const SubHeader = styled.h2`
  font-size: 30px;
`

const LayoutDivider = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: #dddddd;
  height: 1px;
`
