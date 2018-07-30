import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumsView from './AlbumsView'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AlbumsView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App