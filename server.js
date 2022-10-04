// external imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/mongodb");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

// init app
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// database connection
connectDB();

const graphQLServer = new ApolloServer({ typeDefs, resolvers });

graphQLServer.listen().then(({ url }) => {
  console.log(`GraphQL endpoint is running at ${url}`.bgGreen.bold);
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `Portfolio_2.0_server is running on ${port} 😍` });
});

app.listen(port, () => {
  console.log("Server is running on port 🚀", port);
});
