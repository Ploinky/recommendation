import React, { Component } from 'react';

export class Recommendation extends Component {
    render() {
        return (
            <tr> 
            <td> {this.props.title} </td>
            <td> {this.props.category} </td>
            <td> {this.props.description} </td>
            <td> <a href={this.props.link}>Ansehen</a> </td>
        </tr>
        )
    }
}