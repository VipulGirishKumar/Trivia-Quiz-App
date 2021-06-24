import fetch from "node-fetch";
import { CATEGORIES_URL } from "./constants.js";

const resolvers = {
  Query: {
    categories: async () => {
      const categoriesData = await fetch(CATEGORIES_URL).then((res) =>
        res.json()
      );
      console.log(categoriesData);
      return categoriesData.trivia_categories;
    },
  },
};

export default resolvers;
