import React, { Component } from 'react'

class Users extends Component {
    render() {
        const { match: { params } } = this.props
        console.log(params.userId)
        return <h1>Users</h1>
    }
}

export default Users