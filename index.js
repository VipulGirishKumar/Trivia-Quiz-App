import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import { HOST_PORT } from "./constants.js";

// The HOST_PORT is defined in constants.js
const PORT = process.env.PORT ?? HOST_PORT;

// Setting up the Apollo Server to take GraphQL queries
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
