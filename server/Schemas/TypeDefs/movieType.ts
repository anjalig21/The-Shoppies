import { GraphQLObjectType, GraphQLString } from 'graphql';

const movieType = new GraphQLObjectType({
    name: "movieType",
    fields: () => ({
        Title: { type: GraphQLString },
        Year: { type: GraphQLString },
        imdbID: { type: GraphQLString },
        Type: { type: GraphQLString },
        Poster: { type: GraphQLString }
    })
})

export default movieType;