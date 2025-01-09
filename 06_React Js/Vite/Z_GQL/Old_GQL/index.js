const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(
    `
        type Query {
            user: String
            rollNumber: Int
        }
    `
)

const rootValue = {
    user() {
        return "Ram"
    },
    rollNumber() {
        return 7
    }
}

graphql({ 
    schema,
    rootValue,
    source: "query { user, rollNumber }",
}).then(response => { console.log(response) });