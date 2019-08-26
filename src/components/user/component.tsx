import * as React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import { connect } from 'react-redux';

export const GET_USER_QUERY = gql`
  query User($id:Int!){
    user(id: $id){
      id,
      firstName
      lastName
      avatar
    }
  }
`;

interface IUser {
  readonly id: number;
}

export const UserUI: React.FC<IUser> = ({id}) => {
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return (<h2>Error!</h2>);

  const {avatar, firstName, lastName} = _.get(data, 'user');

  return (
    <UserContainer>
      <AvatarImg src={avatar} alt="User avatar"></AvatarImg>
      <Name>{firstName} {lastName}</Name>
    </UserContainer>
  )
}

function mapStateToProps(state: any) {
  const { userID } = state
  return { id: userID }
}

export const User = connect(mapStateToProps)(UserUI)

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

const AvatarImg = styled.img`
  max-height: 60px;
  margin-right: 5px;
`;

const Name = styled.label`
    color: #343a46;
    font-weight: bold;
    font-family: sans-serif;
`
