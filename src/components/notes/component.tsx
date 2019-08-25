import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import _ from 'lodash';
//import { setNotes } from './actions'

interface INotesUI {
  text: string
  setNotes: (event: any) => void
}
export const NotesUI: React.FC<INotesUI> = ({ text, setNotes }) => {
         return (
           <>
             <Title>Notes</Title>
             <NotesEditor></NotesEditor>
           </>
         )
       }

const mapStateToProps = (state: any) => {
    const text = _.get(state, 'text', '');
   
    return { text }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      setNotes: (event: any) => {
          console.log("event = ", event);
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
`
