import React, {useContext, useState} from 'react';
import { GlobalState } from '../../GlobalState';
import MovieList from './MovieList';



function Movies(){
    const state = useContext(GlobalState)
    const [movies] = state.moviesApi.movies;
    const [search, setSearch] = useState("")
    

    return(
        <>
            <div className = "main">
                <div className="search">
                 <input type="search" name="" id="" placeholder="Search..." 
            onChange={(e)=> setSearch(e.target.value)}/>
            </div>
        <div className="products">
           
            {
                movies.filter((movie)=>{
                    if(search === ""){
                        return movie
                    } else if(movie.title.toLowerCase().includes(search.toLowerCase())){
                        return movie
                    }
                    
                }).map(movie => {
                    return  <MovieList key={movie.id} movie={movie} />
                             
                       
                })
            }
        </div>
        </div>
        </>
    )
}

export default Movies;