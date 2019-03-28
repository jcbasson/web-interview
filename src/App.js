import React, { Component } from 'react'

import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      selectedAppointmentType: 'gp',
      availableSlots: [],
    }
  }

  componentDidMount() {
    fetch(`${API_ENDPOINT}/availableSlots`)
      .then(res => res.json())
      .then(json => {
        this.setState({ availableSlots: json })
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  render() {
    // calculate matching slots
    let slots = []
    for (let i = 0; i < this.state.availableSlots.length; i++) {
      for (let j = 0; j < this.state.availableSlots[i]['type'].length; j++) {
        if (
          this.state.availableSlots[i]['type'][j] ===
          this.state.selectedAppointmentType
        ) {
          slots.push(this.state.availableSlots[i])
        }
      }
    }

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="Babylon Health" />
        </div>
        <div style={{ maxWidth: 600, margin: '24px auto' }}>
          <div
            className="button"
            onClick={e => {
              this.setState({ selectedAppointmentType: 'gp' })
            }}
          >
            GP
          </div>
          <div
            className="button"
            onClick={e => {
              this.setState({ selectedAppointmentType: 'Therapist' })
            }}
          >
            Therapist
          </div>
          <div
            className="button"
            onClick={e => {
              this.setState({ selectedAppointmentType: 'Physio' })
            }}
          >
            Physio
          </div>
          <div
            className="button"
            onClick={e => {
              this.setState({ selectedAppointmentType: 'specialist' })
            }}
          >
            Specialist
          </div>
          <div>
            <strong>Appointments</strong>
            {slots.map(slot => (
              <li
                className="appointment-button"
                onClick={() => {
                  this.setState({ selectedAppointment: slot })
                }}
              >
                {slot.time}
              </li>
            ))}
          </div>
          <div>
            <strong>Notes</strong>
            <textarea />
          </div>
          <div>
            <div
              className="button"
              onClick={() => {
                /* TODO: submit the data */
              }}
            >
              Book appointment
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
