import React from "react";
import { Card, Button } from "@shopify/polaris";
import "./MovieCard.css";

const MovieCard = (props: {
  movieTitle: string;
  movieDescription: string;
  moviePoster: string;
}) => {
  const { movieTitle, movieDescription, moviePoster } = props;
  return (
    <div>
      <Card sectioned>
        <div className="cont">
          <img className="posters" src={moviePoster} />
          <div className="spacing" />
          <div>
            <h2 className="title">{movieTitle}</h2>
            <p className="info">{movieDescription}</p>
          </div>
          <div className="spacingButton"></div>
          <div className="button">
            <Button primary>Nominate</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
