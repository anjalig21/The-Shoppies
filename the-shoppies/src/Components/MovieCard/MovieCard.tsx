import React from "react";
import { Card, Button } from "@shopify/polaris";
import "./MovieCard.css";
import { useDispatch } from "react-redux";
import { setChangeBool, setNomination } from "../../actions";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const MovieCard = (props: {
  movieTitle: string;
  movieDescription: string;
  moviePoster: string;
}) => {
  const { movieTitle, movieDescription, moviePoster } = props;
  const Nomination = useSelector((state: RootState) => state.Nomination);
  const dispatch = useDispatch();

  function setNominations() {
    let found = false;
    for (let i = 0; i < Nomination.length; i++) {
      if (
        Nomination[i].movieTitle === movieTitle &&
        Nomination[i].movieDescription === movieDescription
      ) {
        found = true;
      }
    }
    if (!found) {
      Nomination.push({
        movieTitle: movieTitle,
        movieDescription: movieDescription,
      });
      dispatch(setNomination(Nomination));
      dispatch(setChangeBool());
    }
  }

  return (
    <div>
      <Card sectioned>
        <div className="cont">
          <img
            className="posters"
            src={
              moviePoster !== "N/A"
                ? moviePoster
                : "https://cdn.iconscout.com/icon/free/png-256/gallery-187-902099.png"
            }
          />
          <div className="spacing" />
          <div>
            <h2 className="title">{movieTitle}</h2>
            <p className="info">{movieDescription}</p>
          </div>
          <div className="spacingButton"></div>
          <div className="button">
            <Button primary onClick={() => setNominations()}>
              Nominate
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
