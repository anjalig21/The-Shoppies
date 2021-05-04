require('dotenv').config();
const express = require('express');
const app = express();
const graphql = require('graphql');
import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');
const expressGraphQL = require('express-graphql');
const port = process.env.PORT || 5000;

const schema = new GraphQLSchema({query: RootQuery})

// const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.KEY}`;

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {


        }
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})