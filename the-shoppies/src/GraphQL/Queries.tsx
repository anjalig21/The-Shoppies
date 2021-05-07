import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    movieType {
        Title,
        Year,
        Type,
        Poster
    }
  }
`;