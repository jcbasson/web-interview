import * as React from 'react'
import { render } from '@testing-library/react'
import { AppointmentTypes } from './component'
import '@testing-library/jest-dom/extend-expect'
import configureMockStore from 'redux-mock-store'

it('renders consultant types', async () => {
  const mockStore = configureMockStore()
  const store = mockStore({})

  const { getByText } = render(<AppointmentTypes store={store} />)

  expect(getByText('video')).toBeInTheDocument()
  expect(getByText('audio')).toBeInTheDocument()
})
