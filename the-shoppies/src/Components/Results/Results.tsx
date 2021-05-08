import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import {Card} from '@shopify/polaris';
import "./ResultStyles.css"
import SearchBarHook from "../SearchBar/SearchBarHook"

const Results = () => {
    const {search} = SearchBarHook();
    return (
        <div className="mainResults">
            {console.log(search)}
            <Card sectioned>
                {search?.movieSearch.map((mov: any) => {
                    console.log(mov);
                })}
                <div className="Results">
                <MovieCard movieTitle="Hello" movieDescription="hello"/>
                &nbsp;
                <MovieCard movieTitle="Hello" movieDescription="hello"/>
                &nbsp;
                <MovieCard movieTitle="Hello" movieDescription="hello"/>
                &nbsp;
                <MovieCard movieTitle="Hello" movieDescription="hello"/>
                &nbsp;
                </div>
            </Card>
            
        </div>
    )
}

export default Results
