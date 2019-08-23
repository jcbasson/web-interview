import * as React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import _ from 'lodash'
import { connect } from 'react-redux'

export const GET_CONSULTANT_TYPES_QUERY = gql`
  query ConsultantTypes {
    consultantTypes
  }
`

interface IConsultantTypes {
  selectedGP: string
}

export const ConsultantTypesUI: React.FC<IConsultantTypes> = ({
  selectedGP,
}) => {
  const { loading, error, data } = useQuery(GET_CONSULTANT_TYPES_QUERY)

  if (loading) return null
  if (error) return <h2>Error!</h2>

  const consultantTypes = _.get(data, 'consultantTypes', [])

  return (
    <>
      <Title>Consultant Type</Title>
      <ConsultantTypesContainer>
        {consultantTypes.map((ct: string) => (

          <ConsultantType isSelected={selectedGP === ct}>{ct === 'gp' ? 'GP' : ct}</ConsultantType>
        ))}
      </ConsultantTypesContainer>
    </>
  )
}

function mapStateToProps(state: any) {
  const { selectedGP } = state
  return { selectedGP }
}

export const ConsultantTypes = connect(mapStateToProps)(ConsultantTypesUI)

const ConsultantTypesContainer = styled.div`
  display: flex;
`

const Title = styled.h4`
  color: #343a46;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`

const ConsultantType = styled.label<{isSelected: boolean}>`
  height: 30px;
  padding: 5px 10px;
  border: solid 1px ${({isSelected}) => isSelected? '#58bfa9': '#dddddd'}; 
  line-height: 30px;
  margin-right: 20px;
  border-radius: 30px;
  min-width: 35px;
  font-size: 15px;
  text-align: center;
  text-transform: capitalize;
  color:  ${({isSelected}) => isSelected? 'white': '#353a46'};
  background-color: ${({isSelected}) => isSelected? '#58bfa9': 'white'};
`
