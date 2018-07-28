import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { getAlbumPhotos } from './actions/albumFunctions.js'

const AlbumPhotos = (props) => (
	<div>
		<img src={props.url} alt=""/>
	</div>
)

class AlbumPhotosContainer extends Component {
	state = {
    images: [],
    url: '',
  }

	componentDidMount() {
    const photos = getAlbumPhotos(this.props.match.params.id)

    this.setState({
      images: resp.data,
      url: resp.data.url
    })
  }

 render() {
   return (
     <AlbumPhotosContainer {...this.state} />
   )
 }
}

export default AlbumPhotosContainer