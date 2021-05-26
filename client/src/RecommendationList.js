import React, { Component } from 'react';
import { Recommendation } from './Recommendation'

export class RecommendationList extends Component {    
    
    count = 0;
    id = 0;
    date = [];
    
    render() {

            fetch('http://localhost:5001/recommendations/' + this.id)
            .then(res => { 
                console.log('Response : ' + JSON.stringify(res))
                return res.json() 
            })
            .then((data) => {
                console.log('result : ' + JSON.stringify(data));
                this.count = data.length
                this.data = data
            });
        
        
        return (
            <div>
            <h3>ID: {this.id}</h3>
            <p>Anzahl Recommendation: {this.ount}</p>
            { this.data.map((recommendation) => {
                console.log(JSON.stringify(recommendation))
                return (<Recommendation key={recommendation.recoid} title={recommendation.title} link={recommendation.link} />)
            })
        }  
        </div> 
    )}
}
