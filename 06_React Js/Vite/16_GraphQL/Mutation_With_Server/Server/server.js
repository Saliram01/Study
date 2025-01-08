const { ApolloServer, gql } = require("apollo-server");
const { v4: uuidv4 } = require('uuid');

/*
    // Must be used for apollo
    npm install express
    npm install @apollo/server
    npm install @apollo/server/express4

    // npm install body-parser // It not need for apollo server -> automatically handles request body   parsing

    // npm install cors  // optional for apollo server -> it used for cross origin request(seperately hoisted)

    // npm install axios // optional for apollo server -> It is used for graphQl resolver 

    // All libraries in one cli
    npm install express @apollo/server @apollo/server/express4 body-parser cors axios
*/

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