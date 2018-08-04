import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAlbum, getAlbums } from '../actions/albums.js'

class SingleAlbumContainer extends Component {
	state = {
		albumName: '',
		photos: [],
		albums: []
	}

	componentDidMount() {
		getAlbum(this.props.match.params.id).then(resp => {
			console.log(resp.data)
			this.setState({
				albumName: resp.data.name,
				photos: resp.data.photos,
			})
		})
		
		getAlbums(this.props.match.params.id).then(resp => {
			console.log(resp.data)
			this.setState({
				albums: resp.data
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
		<h2>{props.albumName}</h2>
		<ul className="albums">
      {props.photos.map(photo => (
        <li key={`photo${photo.id}`}>
          <Link to={`/photo/${photo.id}`}>
	          <img src={photo.image} />
	          <p>{photo.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  	{/* Album Nav */}
    <ul>
    	{props.albums.map((album, i) => (
				<li key={`link${i}`}>
					<Link to={`/album/${album.id}`}>{album.name}</Link>
				</li>
    	))}
    </ul>
	</div>
)

SingleAlbum.defaultProps = {
	albumName: '',
	photos: [],
	albums: []
}

export default SingleAlbumContainer