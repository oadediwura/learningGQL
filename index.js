import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from "./schemas";

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL!");
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, () => console.log('Running server on port localhost:3000/graphql'))
