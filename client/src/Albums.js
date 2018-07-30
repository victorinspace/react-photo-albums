import React, { Component } from 'react'
import { BrowserRouter as Router, Swtitch, Route, Link } from 'react-router-dom'
import axios from 'axios'

class Albums extends Component {
	state = {
    albums: [],
    album_title: '',
    album_cover: ''
  }

	componentDidMount() {
    axios.get('http://localhost:3001/albums').then(resp => {
      console.table(resp.data)

      this.setState({
        albums: resp.data,
        album_title: resp.data.album_title,
        album_cover: resp.data.album_cover
      })
    })
  }

 render() {
   return (
   		<div className="albums-container">

     		{/* Map and display albums */}
        {/* Each 'Album Item' will link to a unique 'Photos View' */}
        {this.state.albums.map(data => (
          <Link to={`/albums/${data.id}`}>
            <div key={data.id} className="album-item">
              <div className="album-item--image-container">
              	<img src={data.album_cover} className="album-item__image"/>
            	</div>
              <h3 className="album-item__title">{data.album_title}</h3>
            </div>
          </Link>
        ))}
      </div>
   )
 }
}

export default Albums