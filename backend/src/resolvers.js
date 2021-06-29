import fetch from "node-fetch";
import { GetQuestions } from "./getQuestions.js";
import { CATEGORIES_URL } from "./constants.js";

const resolvers = {
  Query: {
    // Fetch a list of all categories the API has to offer
    categories: async () => {
      const categoriesData = await fetch(CATEGORIES_URL).then((res) =>
        res.json()
      );
      console.log(categoriesData);
      return categoriesData.trivia_categories;
    },

    questions(_, { amount, categoryID, difficulty }) {
      return GetQuestions(amount, categoryID, difficulty);
    },
  },
};

export default resolvers;
