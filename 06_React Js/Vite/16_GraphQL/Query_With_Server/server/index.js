import { ApolloServer, gql } from 'apollo-server-express';
import axios from 'axios';
import express from 'express';

/* NOTE
    npm init -y
    npm install apollo-server graphql
    node index.js // run command

    npm install --save-dev nodemon // for bash
    npx nodemon index.js // for bash run command

    npm install axios // use fetch api through this

    npm install express // Use to Add Middleware and Connect to a Database
    // Integrate with a database like MongoDB, PostgreSQL, or MySQL to fetch real data.

    node --no-deprecation your-app.js // Run Server through this command . it remove the warnings

*/

async function serverStart() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
            type Users {
                id: ID!
                name: String!
                email: String!
            }

            type Query {
                getUsers : [Users]
            }
        `,

        resolvers : {
            Query: {
                getUsers : async () => {
                    try {
                        return (await axios.get('https://jsonplaceholder.typicode.com/users')).data 
                    }
                    catch(error) {
                        console.error("Error: ", error);
                    }
                }
            }
        }
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(4000, () => console.log(`Server running on http://localhost:4000${server.graphqlPath}`));
}
serverStart();