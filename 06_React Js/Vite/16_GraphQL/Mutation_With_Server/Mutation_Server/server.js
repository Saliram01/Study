const { ApolloServer, gql } = require("apollo-server");
const { v4: uuidv4 } = require('uuid');

const users = [];

const typeDefs = gql`
    type User {
        name: String!
        email: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(name: String!, email: String!) : User
    }
`;

const resolvers = {
    Query: {
        users: () => users,
    },

    Mutation: {
        addUser: (_, {name, email}) => {
            const newUser = {id: uuidv4(), name, email};
            users.push(newUser);
            return newUser;
        },
    },
};

// create an apollo server instance
const server = new ApolloServer({typeDefs,resolvers});

server.listen({port: 4000}).then(({url}) => {console.log(`Server ready at ${url}graphql`)});