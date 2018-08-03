import React, { Component } from 'react'
import '../styles/App.css'
import {getAlbums} from '../actions/albumFunctions.js'

class App extends Component {
  componentDidMount() {
    getAlbums().then()
  }
  render() {
    return (
      
    )
  }
}

export default App