import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPhoto } from '../actions/albums.js'

class SinglePhotoContainer extends Component {
	state = {
		albumId: null,
		albumName: '',
		image: '',
		location: '',
		name: ''
	}

	componentDidMount() {
		getPhoto(this.props.match.params.id).then(resp => {
			this.setState({
				albumId: resp.data.albumid,
				albumName: resp.data.album.name,
				image: resp.data.image,
				name: resp.data.name
			})
		})	
	}
	render() {
		return (
			<SinglePhoto {...this.state} /> 
		)
	}
}

const SinglePhoto = props => (
	<div>
		<p><Link to={`/album/${props.albumId}`}>Back to {props.albumName}</Link></p>
		<img src={props.image} alt=""/>
		<p>{props.name}</p>
	</div>
)

export default SinglePhotoContainer