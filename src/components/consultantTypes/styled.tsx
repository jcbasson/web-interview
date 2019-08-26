import styled from 'styled-components'

export const ConsultantTypesContainer = styled.div`
  display: flex;
`

export const Title = styled.h4`
  color: #343a46;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
  font-family: sans-serif;
`

export const ConsultantType = styled.div<{isSelected: boolean}>`
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
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
  -o-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  font-family: sans-serif;
`