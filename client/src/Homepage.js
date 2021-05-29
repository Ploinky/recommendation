import React, { Component } from 'react'
import UserIdInput from './UserIdInput'
import { withRouter } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <UserIdInput handleLogin={this.props.handleLogin}/>
        )
    }
}

export default withRouter(Homepage)