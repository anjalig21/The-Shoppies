import axios from 'axios';
import movieType from "./Schemas/TypeDefs/movieType";
import movieSearch from "./Schemas/Interfaces/movieSearch";
const cors = require('cors');
require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
app.use(cors());
const port: string = process.env.PORT || '5000';

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    movieSearch: {
      type: new GraphQLList(movieType),
      args: {
        title: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const result: movieSearch[] = await axios.get(`http://www.omdbapi.com/?s=${args.title}&apikey=${process.env.KEY}`)
        .then((res) => {
          return res.data.Search;
        })
        .catch((err: any) => {
          console.log(err);
        })
        return result;
      }
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
