import { gql } from "@apollo/client";

export const LOAD_TITLE = gql`
  query movieSearch($title: String!) {
    movieSearch(title: $title) {
        Title
        Year
        imdbID
        Type
        Poster
    }
  }
`;