import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumsView from './AlbumsView'
import EachAlbum from './EachAlbum'
import EachPhoto from './EachPhoto'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AlbumsView} />
            <Route path="/albums/:id" component={EachAlbum} />
            <Route path="/photos/:id" component={EachPhoto} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App