const albumPage = {
  id: 'rateyourmusic',
  urlMatch: 'https://rateyourmusic.com/release/album/*/*/',
  entrypointClassName: 'my_catalog_rate_tracks',
  insertComponentAfter: () => {
    const elements = document.getElementsByClassName('my_catalog_rate_tracks');
    if (elements && elements[0]) {
      return elements[0]
    }
  },
  getMeta: () => {
    const artistEl = document.querySelector('.artist')
    const artist = artistEl ? artistEl.innerHTML : undefined
    const albumEl = document.querySelector('.album_title')
    const album = albumEl ? albumEl.childNodes[0].nodeValue.trim() : undefined
    return {
      artist,
      album,
    }
  }
}

export default albumPage