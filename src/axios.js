import axios from 'axios'

// Base url to make the requests to the tmdb server

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default instance