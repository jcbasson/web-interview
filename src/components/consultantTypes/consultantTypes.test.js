import * as React from 'react'
import { render } from '@testing-library/react'
import { ConsultantTypes, GET_CONSULTANT_TYPES_QUERY } from './component'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import '@testing-library/jest-dom/extend-expect'
import configureMockStore from 'redux-mock-store'

it('renders consultant types', async () => {
  const mockStore = configureMockStore()
  const store = mockStore({})
  const mocks = [
    {
      request: {
        query: GET_CONSULTANT_TYPES_QUERY,
      },
      result: {
        data: {
          consultantTypes: ['gp', 'specialist', 'therapist'],
        },
      },
    },
  ]

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ConsultantTypes store={store} />
    </MockedProvider>
  )

  await wait(0)

  expect(getByText('GP')).toBeInTheDocument()
  expect(getByText('specialist')).toBeInTheDocument()
  expect(getByText('therapist')).toBeInTheDocument()
})
