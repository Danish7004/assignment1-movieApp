import { useEffect, useState } from 'react';
import axios from 'axios';


function MoviesApi(props) {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
    
    const fetchmovies = async() =>{
         const res = await axios.get("https://imdb-api.com/en/API/Top250Movies/k_nfvznqu3")
        //  console.log(res)
        setMovies(res.data.items)
    }

    fetchmovies(); 
    }, [])



    return {

        movies: [movies, setMovies]
    };
}

export default MoviesApi;