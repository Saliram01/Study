const { ApolloServer , gql} = require("apollo-server");

const typeDefs = gql`
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello"
    }
}

const server = new ApolloServer({typeDefs,resolvers});

server.listen(4000,() => {console.log("Server started at port: http://localhost:4000/graphql")});