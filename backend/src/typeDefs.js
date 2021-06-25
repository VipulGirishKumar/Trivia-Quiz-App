import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Category {
    name: String!
    id: ID!
  }

  type Query {
    categories: [Category]
  }
`;

export default typeDefs;
