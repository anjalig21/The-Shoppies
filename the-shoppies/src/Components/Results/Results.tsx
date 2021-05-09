import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import {Card} from '@shopify/polaris';
import "./ResultStyles.css"
import SearchBarHook from "../SearchBar/SearchBarHook"
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

const Results = () => {
    const {search} = SearchBarHook();
    const movieList = useSelector((state: RootState) => state.movieList)
    return (
        <div className="mainResults">
            {console.log(search)}
            <Card sectioned>
                {search?.movieSearch.map((mov: any) => {
                    console.log(mov);
                })}
                <div className="Results">
                    {movieList?.map((movie: any) => {
                    return ( <> <MovieCard movieTitle={movie.Title} movieDescription={movie.Year} moviePoster={movie.Poster}/>
                            <br /> </>)
                    })}
                </div>
            </Card>
            
        </div>
    )
}

export default Results
