import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import _ from 'lodash'
import { setNotes } from './actions'

interface INotesUI {
  notes: string
  setNotes: (event: any) => void
}
export const NotesUI: React.FC<INotesUI> = ({ notes, setNotes }) => {
  return (
    <>
      <Title>Notes</Title>
      <NotesEditor onChange={setNotes} value={notes}></NotesEditor>
    </>
  )
}

const mapStateToProps = (state: any) => {
  const notes = _.get(state, 'notes', '')

  return { notes }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setNotes: (event: any) => {
      dispatch(setNotes(event.target.value))
    },
  }
}

export const Notes = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesUI)

export const Title = styled.h4`
  color: #343a46;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`

const NotesEditor = styled.textarea`
  height: 200px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 100px;
`
