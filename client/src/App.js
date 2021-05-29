
import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { RecommendationList } from './RecommendationList'
import Homepage from './Homepage'

class App extends Component {
  constructor(props) {
    super(props)

    this.setState({
      token: null
    })
  }


  handleLogin(userId, pwd) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "username": userId,
      "password": pwd })
    };

    fetch('http://localhost:5001/signin', requestOptions)
    .then(res => {
      console.log(res) 
    })
  }

  render() {
    return (
      <Router>
        <div>
        </div>
        <Switch>
          <Route path="/:id" component={RecommendationList}/>
          <Route path="/" render={(props) => <Homepage handleLogin={this.handleLogin} {...props}/>}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
