import { gql } from "apollo-server";

const typeDefs = gql`
  type Example {
    name: String
  }

  type Query {
    example: Example
  }
`;

export default typeDefs;
