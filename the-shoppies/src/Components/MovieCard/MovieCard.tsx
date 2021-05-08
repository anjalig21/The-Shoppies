import React from 'react';
import {Card} from '@shopify/polaris';

const MovieCard = (props: { movieTitle: String; movieDescription: String; }) => {
  const { movieTitle, movieDescription } = props;
  return (
    <div>
      <Card sectioned title={movieTitle} actions={[{ content: "Nominate" }]}>
        <p>
          {movieDescription}
        </p>
      </Card>
    </div>
  );
};

export default MovieCard;
