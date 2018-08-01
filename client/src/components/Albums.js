import React, { Component } from 'react'
import { getAlbums } from '../actions/albumFunctions.js'
import { Link } from 'react-router-dom'

/* Container Component */
class AlbumsContainer extends Component {
  state = {
    albums: []
  }

  componentDidMount() {
    getAlbums().then(resp => {
      this.setState({
        albums: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <Albums Albums={this.state.albums} />
      </div>
    )
  }
}

/* Presentational Component */
const Albums = props => (
  <div>
    <h1>My Photo Albums</h1>
    <ul className="albums">
      {props.albums.map(album => (
        <li key={`album${album.id}`}>
          <Link to={`/album/${album.id}`}>
            <img src={album.albumCover} alt=""/>
            <p>{album.albumTitle}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

/* Ensure default 'albums' array */
Albums.defaultProps = {
  albums: []
}

export default AlbumsContainer