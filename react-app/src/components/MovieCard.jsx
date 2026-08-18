import React from 'react'

const MovieCard = ({ pelicula }) => {
  if (!pelicula) return null;

  const { title, vote_average, poster_path, release_date, original_language } = pelicula;
  return (
    <div>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: '/no-movie.img'} alt="{title}" />
        <div className="mt-4">
            <h3 className="text-white">{title}</h3>
            <div className="content">
                <div className="rating">
                    <img src="star.svg" alt="Star Icon" />
                    <p className="text-white">{vote_average? vote_average.toFixed(1):'N/A'}</p>
                    <span>•</span>
                    <p className="lang text-white">{original_language}</p>
                    <span>•</span>
                    <p className="year text-white">{release_date? release_date.split('-')[0]:'N/A'}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard