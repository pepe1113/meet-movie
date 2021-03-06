import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { movieGenres, tvGenres } from '../data/genres'
const imgUrl = 'https://image.tmdb.org/t/p/w342'
const noPoster = 'https://fakeimg.pl/500x750/?text=No%20Poster'

const FilmSliderCard = ({ film, media_type }) => {
  const title = film.title ? film.title : film.name
  const poster = film.poster_path ? imgUrl + film.poster_path : noPoster

  const renderGenre = (genre_ids) => {
    let genreStr = ''
    genre_ids.forEach((genreId) => {
      if (film.media_type === 'movie') {
        genreStr += movieGenres.filter((i) => i.id === genreId)[0].name + '・'
      } else if (film.media_type === 'tv') {
        genreStr += tvGenres.filter((i) => i.id === genreId)[0].name + '・'
      }
    })
    return _.truncate(genreStr, {
      length: 20,
      separator: '・',
      omission: '',
    })
  }

  return (
    <Link to={`/show/${media_type ? media_type : film.media_type}/${film.id}`} className="card">
      <div className="dark-hover">
        <img src={poster} alt={title} />
      </div>
      <p className="card-title">{title}</p>
      <span className="card-description">{renderGenre(film.genre_ids)}</span>
    </Link>
  )
}

export default FilmSliderCard
