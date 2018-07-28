import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Home extends Component {
 state = {
    albums: [],
    name: '',
    cover: ''
  }

  componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {
      console.table(resp.data)

      this.setState({
        albums: resp.data,
        name: resp.data.name,
        cover: resp.data.cover
      })
    })
  }

 render() {
   return (
		<div className="container">
			<div className="albums-view-header">
				<h1>Photo Albums</h1>
			</div>
        {this.state.albums.map(data => (
        	<Link to={`/album/${data.id}`}>
	          <div key={data.id} className="album-item">
	            <img src={data.cover} className="album-item__image"/>
	            <h3>{data.name}</h3>
	          </div>
          </Link>
        ))}

      </div>     
   )
 }
}

export default Home