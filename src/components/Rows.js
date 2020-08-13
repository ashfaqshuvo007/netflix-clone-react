import React, { useState, useEffect } from 'react'
import axios from '../axios'
import "../Row.css"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const base_path = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()

    }, [fetchUrl])

    return (
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>

            {/* containers ->posters */}
            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                            src={`${base_path}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    ))
                }
            </div>

        </div>
    )
}
export default Row