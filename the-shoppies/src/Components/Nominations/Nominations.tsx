import React, { useEffect, useState } from "react";
import "./NominationStyles.css";
import NominationCard from "../NominationCard/NominationCard";
import { Card } from "@shopify/polaris";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const Nominations = () => {
  const Nomination = useSelector((state: RootState) => state.Nomination);
  const ChangeState = useSelector((state: RootState) => state.changeState);
  const [comp, setComp] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Nomination.length == 5) {
      
    }
    setComp(Nomination);
  }, [ChangeState])

  return (
    <div className="Nominations">
      <Card sectioned>
        <div className="Nominations">
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
