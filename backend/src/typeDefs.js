import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Category {
    name: String!
    id: ID!
  }

  type Question {
    question: String!
    correct_answer: String!
    incorrect_answers: [String]
  }

  type Query {
    categories: [Category]
    questions(amount: Int!; categoryID: ID!, difficulty: String!): [Question]
  }
`;

export default typeDefs;
