import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { setConsultantType } from './actions';
import { Title, ConsultantTypesContainer, ConsultantType } from './styled';

export const GET_CONSULTANT_TYPES_QUERY = gql`
  query ConsultantTypes {
    consultantTypes
  }
`

interface IConsultantTypes {
    consultantType: string
    setSelected: (consultantType: string) => () => void;
}

export const ConsultantTypesUI: React.FC<IConsultantTypes> = ({
    consultantType,
    setSelected,
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
          <ConsultantType key={ct} onClick={setSelected(ct)} isSelected={consultantType === ct}>{ct === 'gp' ? 'GP' : ct}</ConsultantType>
        ))}
      </ConsultantTypesContainer>
    </>
  )
}

function mapStateToProps(state: any) {
  const consultantType = _.get(state, 'consultantType.selected', '');
  return { consultantType }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      setSelected: (consultantType: string) => () => dispatch(setConsultantType(consultantType))
    }
  }

export const ConsultantTypes = connect(mapStateToProps, mapDispatchToProps)(ConsultantTypesUI)
