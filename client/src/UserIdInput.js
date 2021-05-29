import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class UserIdInput extends Component {
    constructor(props) {
        super(props)
        this.state = { userId: '', pwd: '' }

        this.handleChangePwd = this.handleChangePwd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.props.handleLogin(this.state.userId, this.state.pwd);
        event.preventDefault()
    }

    handleChange(event) {
        this.setState({ userId: event.target.value })
    }

    handleChangePwd(event) {
        this.setState({ pwd: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    UserId:
                    <input type="text" value={this.state.userId} onChange={this.handleChange} />
                    <input type="text" value={this.state.pwd} onChange={this.handleChangePwd} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default withRouter(UserIdInput)