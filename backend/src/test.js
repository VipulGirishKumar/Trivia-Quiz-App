import fetch from "isomorphic-fetch";

const query = `
query {
  categories {
    name
    id
  }
}
`;

const URL = "http://we-accelerate-project.herokuapp.com";

fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
})
  .then((r) => r.json())
  .then((data) => data.data.categories)
  .then((data) => {
    console.log("data returned:", data);
    console.log(data[0]);
  })
  .catch((e) => console.log(`Error: ${e}`));
