import React, { Component } from 'react';

export class Recommendation extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title} <tr> </tr><a href={this.props.link}>Ansehen</a></p>
            </div>
        )
    }
}