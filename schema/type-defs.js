const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    avatar: String
    role: Role
    phone: String
    listFriends: [User!]
    favoriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int
    isInTheaters: Boolean
  }

  enum Role {
    ADMIN
    USER
    EDITOR
    MODERATOR
  }

  type Query {
    listUsers: [User!]!
    getUser(id: ID!): User
    listMovies: [Movie!]!
    getMovie(id: ID!): Movie
    getMoviesByName(name: String!): [Movie!]
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    avatar: String
    role: Role = USER
    phone: String
  }

  input UpdateUserInput {
    name: String
    password: String
    avatar: String
    phone: String
  }

  input UpdateUserRoleInput {
    role: Role
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    updateUserRole(id: ID!, input: UpdateUserRoleInput!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
