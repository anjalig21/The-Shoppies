import React from "react";
import { Card, Button } from "@shopify/polaris";

const NominationCard = (props: {
    movieTitle: string;
    movieDescription: string;
  }) => {
    const { movieTitle, movieDescription } = props;
  return (
    <div>
      <Card sectioned>
          <div>
            <h2 className="title">{movieTitle}</h2>
            <p className="info">{movieDescription}</p>
          </div>
      </Card>
    </div>
  );
};

export default NominationCard
