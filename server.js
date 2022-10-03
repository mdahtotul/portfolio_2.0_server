// external imports
const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const graphQLSchema = require("./schema/schema");
const colors = require("colors");
const connectDB = require("./config/mongodb");

// init app
const app = express();
const port = process.env.PORT || 5000;

// database connection
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `Portfolio_2.0_server is running on ${port} 😍` });
});

app.listen(port, () => {
  console.log("Server is running on port 🚀", port);
});
