import * as React from 'react'
import { render } from '@testing-library/react'
import { UserUI, GET_USER_QUERY } from './index'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import '@testing-library/jest-dom/extend-expect'

it('renders UserUI without error', async () => {
  const mocks = [
    {
      request: {
        query: GET_USER_QUERY,
        variables: {
          id: 1,
        },
      },
      result: {
        data: {
          user: {
            id: 1,
            avatar: 'TestAvatar',
            firstName: 'TestFirstName',
            lastName: 'TestLastName',
          },
        },
      },
    },
  ]

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserUI id={1} />
    </MockedProvider>
  )

  await wait(0)

  expect(getByText('TestFirstName TestLastName')).toBeInTheDocument()
})

it('renders UserUI with an error', async () => {
    const mocks = [
      {
        request: {
          query: GET_USER_QUERY,
          variables: {
            id: 'zzzz',
          },
        },
        error: new Error('aw shucks'),
        result: {
          data: {
            user: {
              id: 1,
              avatar: 'TestAvatar',
              firstName: 'TestFirstName',
              lastName: 'TestLastName',
            },
          },
        },
      },
    ]
  
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserUI id={'zzzz'} />
      </MockedProvider>
    )
  
    await wait(0)
  
    expect(getByText('Error!')).toBeInTheDocument()
  })
