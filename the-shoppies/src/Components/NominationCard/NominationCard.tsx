import React from "react";
import "./NominationCardStyles.css"
import { Card, Button } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useDispatch } from "react-redux";
import { setBanner, setChangeBool, setNomination } from "../../actions";

const NominationCard = (props: {
  movieTitle: string;
  movieDescription: string;
}) => {
  const { movieTitle, movieDescription } = props;
  const dispatch = useDispatch();
  const Nomination = useSelector((state: RootState) => state.Nomination);
  const showBanner = useSelector((state: RootState) => state.showBanner);
  function removeNom() {
    const temp = Nomination.filter((nomination: any, index: number) => {
        return nomination.movieTitle !== movieTitle;
    })
    dispatch(setNomination(temp));
    dispatch(setChangeBool());
    dispatch(setBanner(false));
    window.localStorage.setItem('nominations', JSON.stringify(temp));
  }
  return (
    <div>
      <Card sectioned>
        <div className="container">
          <div>
            <h2 className="title">{movieTitle}</h2>
            <p className="info">{movieDescription}</p>
          </div>
          <div className="spacingButton"></div>
          <div className="RemoveButton">
            <Button onClick={() => removeNom()} destructive>Remove</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NominationCard;
