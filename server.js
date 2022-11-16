// external imports
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const colors = require('colors');
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');
const connectMongooseDB = require('./config/mongooseDB');

// init app
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// database connection
connectMongooseDB();

const graphQLServer = new ApolloServer({
  typeDefs,
  resolvers,
  // csrfPrevention: true,
  cache: 'bounded',
  // cors: {
  //   origin: ['http://localhost:3000'],
  // },
});

graphQLServer.listen().then(({ url }) => {
  console.log(`GraphQL endpoint is running at ${url}`.bgGreen.bold);
});

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: `Portfolio_2.0_server is running on ${port} 😍` });
});

const today = new Date();
const time =
  today.getHours() +
  ':' +
  today.getMinutes() +
  ':' +
  today.getSeconds() +
  'sec';

app.listen(port, () => {
  console.log(time.red.bold, 'Server is running on port 🚀', port);
});
