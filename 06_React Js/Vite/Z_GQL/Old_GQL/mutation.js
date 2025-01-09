var { graphql, buildSchema } = require("graphql");

var user = buildSchema(
    `
        type Query {
            _empty:String
        }

        type Mutation {
            addUser: String
        }
    `
)

const resolvers = {
    addUser:() => {
        return "Hello World";
    },
}

graphql({
    schema: user,
    rootValue: resolvers,
    source: `mutation{
        addUser
    }`
}).then(result => {console.log(result)});