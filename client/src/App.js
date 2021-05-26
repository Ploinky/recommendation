
import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { RecommendationList } from './RecommendationList'
import { Homepage } from './Homepage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        </div>
        <Switch>
          <Route path="/:id" component={RecommendationList}/>
          <Route path="/" component={Homepage}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
