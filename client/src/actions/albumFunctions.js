import photos from '../../../db.json'

export function getAllPhotos() {
	return photos
}

export function getAlbumPhotos(id) {
	return photos.find(user => user.id == id)
}