import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Albums from './Albums'
import SingleAlbum from './SingleAlbum'
import SinglePhoto from './SinglePhoto'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Albums} />
            <Route path="/album/:id" component={SingleAlbum} />
            <Route path="/photo/:id" component={SinglePhoto} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App