import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import 'home page' as Album List
import AlbumsList from './AlbumsList'
// <Route path='/album/:id' component={Album} />

// import Photo from './Photo'
// <Route path='/photo/:id' component={Photo} />

class App extends Component {
  render() {
    return (
     <Router>
      <div>
          <Route exact path='/' component={AlbumsList} />
      </div>
     </Router> 
    )
  }
}

export default App
