const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    avatar: String
    role: UserRole
    phone: String
  }

  type Project {
    id: ID!
    name: String!
    categories: [String]!
    des: [String]
    tags: [String]
    status: ProjectStatus
    clientId: ID
    live_site: String
    client_repo: String
    server_repo: String
    thumb_img: String
    sub_img: [String]
  }

  enum UserRole {
    Admin
    User
    Editor
    Moderator
  }

  enum ProjectStatus {
    Not_Started
    In_Progress
    Completed
  }

  #  REMEMBER: Queries are for reading data
  type Query {
    # HACK: user query done
    listUsers: [User!]
    getUser(id: ID!): User
    # HACK: project query done
    listProjects: [Project!]
    getProject(id: ID!): Project
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    avatar: String
    role: UserRole = USER
    phone: String
  }

  input UpdateUserInput {
    name: String
    password: String
    avatar: String
    phone: String
  }

  input UpdateUserRoleInput {
    role: UserRole
  }

  input CreateProjectInput {
    name: String!
    categories: [String!]!
    des: [String!]
    tags: [String!]
    status: ProjectStatus = Not_Started
    clientId: ID
    live_site: String
    client_repo: String
    server_repo: String
    thumb_img: String
    sub_img: [String]
  }

  input UpdateProjectInput {
    name: String
    categories: [String!]
    des: [String!]
    tags: [String!]
    status: ProjectStatus
    clientId: ID
    live_site: String
    client_repo: String
    server_repo: String
    thumb_img: String
    sub_img: [String]
  }

  #  REMEMBER: Mutations are for writing data
  type Mutation {
    # HACK: user mutation done
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    updateUserRole(id: ID!, input: UpdateUserRoleInput!): User
    deleteUser(id: ID!): User
    # HACK: projects mutation done
    createProject(input: CreateProjectInput!): Project
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = { typeDefs };
