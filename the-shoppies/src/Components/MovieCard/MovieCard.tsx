import React, { useEffect, useState } from "react";
import { Card, Button } from "@shopify/polaris";
import "./MovieCard.css";
import { useDispatch } from "react-redux";
import { setBanner, setChangeBool, setNomination } from "../../actions";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const MovieCard = (props: {
  movieTitle: string;
  movieDescription: string;
  moviePoster: string;
}) => {
  const { movieTitle, movieDescription, moviePoster } = props;
  const Nomination = useSelector((state: RootState) => state.Nomination);
  const ChangeState = useSelector((state: RootState) => state.changeState);
  const [disabledButton, setDisabledButton] = useState(false);
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
      if (Nomination.length <= 4) {
        Nomination.push({
          movieTitle: movieTitle,
          movieDescription: movieDescription,
        });
        window.localStorage.setItem("nominations", JSON.stringify(Nomination));
        dispatch(setNomination(Nomination));
        dispatch(setChangeBool());
        if (Nomination.length === 5) {
          dispatch(setBanner(true));
        } else {
          dispatch(setBanner(false));
        }
      } else {
        dispatch(setBanner(true));
      }
    }
  }

  useEffect(() => {
    const result = Nomination.some((nomination: any) => {
      if (
        nomination.movieTitle === movieTitle &&
        nomination.movieDescription === movieDescription
      ) {
        return true;
      } else {
        return false;
      }
    });
    setDisabledButton(result);
  }, [ChangeState]);

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
            <Button
              primary
              disabled={disabledButton}
              onClick={() => setNominations()}
            >
              Nominate
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
