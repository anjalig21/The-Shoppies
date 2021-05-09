import React, { useEffect, useState } from "react";
import "./NominationStyles.css";
import NominationCard from "../NominationCard/NominationCard";
import { Card } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const Nominations = () => {
  const Nomination = useSelector((state: RootState) => state.Nomination);
  const ChangeState = useSelector((state: RootState) => state.changeState);
  const [comp, setComp] = useState([]);

  useEffect(() => {
    setComp(Nomination);
  }, [ChangeState])

  return (
    <div className="NominationsComp">
      <Card sectioned>
        <h1 className="nominateTitle">Nominations</h1>
        <br />
        <div className="NominationsMap">
          {comp?.map((movie: any, index: number) => {
            return (
              <>
                <NominationCard key={index}
                  movieTitle={movie.movieTitle}
                  movieDescription={movie.movieDescription}
                />
                <br />
              </>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Nominations;
