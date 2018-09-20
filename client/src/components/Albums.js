import React, { Component } from 'react'
import { getAlbums } from '../actions/albums.js'
import { Link } from 'react-router-dom'

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
      <Albums albums={this.state.albums} />
    )
  }
}

const Albums = props => (
  <div className="albums-container">
    <h1>My Photo Albums</h1>
    <ul className="albums">
      {props.albums.map(album => (
        <li key={`album${album.id}`}>
          <Link to={`/album/${album.id}`}>
          <img src={album.image} />
          <p>{album.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

// Make sure 'albums' is always an array
Albums.defaultProps = {
  albums: []
}

export default AlbumsContainer
