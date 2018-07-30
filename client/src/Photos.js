import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

class Photos extends Component {
	state= {
		images: 1,
    url: ''
	}

	componentDidMount() {
		axios.get('http://localhost:3001/images').then(resp => {
      console.table(resp.data)

      this.setState({
        images: resp.data,
        url: resp.data.name
      })
    })
	}

 render() {
   return (
     <Router>
      <div className="main-container">
        
        <div className="main-header">
          <h1 className="main-header__title">Photo Albums</h1>
        </div>
          
        {/* map and display albums */}
        {/* each Image Card will link to a list of photos */}
        {this.state.images.map(data => (
          <Link to={`/album/photo/${data.id}`}>
            <div key={data.id} className="photo-item">
              <img src={data.url} className="photo-item__image"/>
            </div>
          </Link>

        ))}

      </div>
    </Router>
   )
 }
}

export default Photos