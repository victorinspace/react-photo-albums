import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAlbum } from '../actions/albumFunctions.js'

class SingleAlbumContainer extends Component {
	state = {
		albumTitle: '',
		photos: []
	}

	componentDidMount() {
		getAlbum(this.props.match.params.id).then(resp => {
			this.setState({
				albumTitle: resp.data.name,
				photos: resp.data.photos
			})
		})
	}

	render() {
		return (
			<SingleAlbum {...this.state} />
		)
	}
}

const SingleAlbum = props => (
	<div>
		<h2>{props.albumTitle}</h2>
		<ul className="albums">
	  {props.photos.map(photo => (
	    <li key={`photo${photo.id}`}>
	      <Link to={`/photo/${photo.id}`}>
	        <img src={photo.imageUrl} alt=""/>
	        <p>{photo.imageTitle}</p>
	      </Link>
	    </li>
	  ))}
		</ul>
	</div>
)

SingleAlbum.defaultProps = {
	albumName: '',
	photos: []
}

export default SingleAlbumContainer