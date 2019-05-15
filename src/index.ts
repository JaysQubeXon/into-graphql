import * as express from "express";

import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers"

const app = express();

const PORT = 1717;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(
    "\x1b[36m%s\x1b[35m%s\x1b[0m",
    `BloomingJS-GraphQL server `,
    `listening on port`,
    `${PORT}`
  );
});
