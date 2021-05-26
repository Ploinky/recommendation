
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { RecommendationList } from './RecommendationList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        </div>
        <Switch>
          <Route path="/:id" component={RecommendationList}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
