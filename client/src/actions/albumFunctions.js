import axios from 'axios'

export function getAlbums() {
	return axios.get('http://localhost:3001/albums')
}

export function getAlbum(id) {
	return axios.get(`http://localhost:3001/albums/${id}?_embed=photos`)
}
