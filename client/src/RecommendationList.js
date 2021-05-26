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
        this.state.id = this.props.match.params.id;
      
      fetch('http://localhost:5001/recommendations/' + this.state.id)
      .then(res => {
          return res.json() 
      })
      .then((data) => {
          console.log('result : ' + JSON.stringify(data));
          this.setState({count: data.length,
            data: data
        })
      });
      
  }
    
    render() {  
        return (

            <div>
            <h3>ID: {this.state.id}</h3>
            <p>Anzahl Recommendation: {this.state.count}</p>
            {console.log(this.state.data)}
            {
                this.state.data.map((recommendation) => {
                    console.log("recommendation:" + JSON.stringify(recommendation))
                    return (<Recommendation key={recommendation.recoid} title={recommendation.title} link={recommendation.link} />)
                })
            }  
            </div> 
        )
    }
}
