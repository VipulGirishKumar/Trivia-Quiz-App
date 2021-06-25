import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import { HOST_PORT } from "./constants.js";

// Constants definition
const PORT = process.env.PORT ?? HOST_PORT; // Defined in constants.js
const API_PATH = "/api";
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Current directory

// Starting the Express and Apollo Server
// The Apollo server manages GraphQL requests, and the Express server hosts it
//  at localhost:4000/api
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app, path: API_PATH });

// Redirects any traffic to '/' to the front-end app.
app.use(express.static(path.join(__dirname, "/../../frontend/build")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname + "/../../frontend/build/index.html"));
});

// Starting the server
await new Promise((resolve) => app.listen({ port: PORT }, resolve));
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
