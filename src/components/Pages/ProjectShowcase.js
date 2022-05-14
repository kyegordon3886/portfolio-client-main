import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { changePassword } from '../../api/auth'
// import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class ProjectShowcase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  render () {
    // const { oldPassword, newPassword } = this.state

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>My Works!</h3>
          <p>Project Showcase: Feature your GA projects
          </p>
          {/* <Form onSubmit={this.onChangePassword}>
            <Form.Group controlId='oldPassword'>
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name='oldPassword'
                value={oldPassword}
                type='password'
                placeholder='Old Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name='newPassword'
                value={newPassword}
                type='password'
                placeholder='New Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form> */}
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectShowcase)
