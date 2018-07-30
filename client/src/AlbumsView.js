import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import AlbumsHeader from './AlbumsHeader.js'
import Albums from './Albums.js'

class AlbumsView extends Component {
	
 render() {
   return (
     <Router>
      <div className="main-container">
        
        {/* Display header */}
        <AlbumsHeader />
        
        {/* Display albums */}
        <Albums />

      </div>
    </Router>
   )
 }
}

export default AlbumsView