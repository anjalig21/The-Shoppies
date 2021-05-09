import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Card } from "@shopify/polaris";
import "./ResultStyles.css";
import SearchBarHook from "../SearchBar/SearchBarHook";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const Results = () => {
  const { search } = SearchBarHook();
  const movieList = useSelector((state: RootState) => state.movieList);
  return (
    <div className="mainResults">
      <Card sectioned>
      <h1>Results</h1>
        <div className="Results">
          {movieList?.map((movie: any, index: number) => {
            return (
              <>
                {" "}
                <MovieCard key={index}
                  movieTitle={movie.Title}
                  movieDescription={movie.Year}
                  moviePoster={movie.Poster}
                />
                <br />{" "}
              </>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Results;
