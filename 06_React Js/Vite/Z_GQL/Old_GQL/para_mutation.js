var { graphql, buildSchema } = require("graphql");

var user = buildSchema(
    `
        type Query {
            _empty:String
        }

        enum Course {
            JAVA
            PYTHON
        }

        input User {
            id: ID!
            name: String!
            age: Int!
            course: Course!
        }

        type Mutation {
            addUser(input: User): String
        }
    `
)

const resolvers = {
    addUser:(params) => {
        console.log(params);
        return "Hello";
    },
}

graphql({
    schema: user,
    rootValue: resolvers,
    source: `mutation{
        addUser(input: {
            id: "154f54ssf4s"
            name: "Mutation parameter"
            age: 725
            course: JAVA
        })
    }`
}).then(result => {console.log(result)});