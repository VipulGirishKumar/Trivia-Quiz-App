import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import { HOST_PORT } from "./constants.js";

const PORT = process.env.PORT ?? HOST_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
