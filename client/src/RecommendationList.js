import React, { Component } from 'react';
import { Recommendation } from './Recommendation'

export class RecommendationList extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            count: 0,
            id: 0
        }
    }

    componentDidMount() {
      fetch('http://localhost:5001/recommendations/' + this.props.match.params.id)
      .then(res => {
          return res.json() 
      })
      .then((data) => {
          this.setState({count: data.length,
            data: data,
            id: this.props.match.params.id
        })
      });
      
  }
    
    render() {  
        return (
            <div>
            <h3>ID: {this.state.id}</h3>
            <p>Anzahl Recommendation: {this.state.count}</p>

            <table cellSpacing="15">
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Kategorie</th>
                        <th>Beschreibung</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map((r) => {
                    return (<Recommendation key={r._id} title={r.title}
                        link={r.link} category={r.category} description={r.description}/>)
                    })
                }  
                </tbody>
            </table>
            </div> 
        )
    }
}
