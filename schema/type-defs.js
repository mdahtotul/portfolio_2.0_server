const { gql } = require('apollo-server');

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    projectsId: [ID!]
    projects: [Project!]
  }

  type Tag {
    id: ID!
    name: String!
    projectsId: [ID!]
    projects: [Project!]
  }

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
    slug: String!
    categoriesId: [ID!]!
    categories: [Category]
    des: [String]
    tagsId: [ID!]
    tags: [Tag]
    rank: Float
    ratings: Float
    status: ProjectStatus
    clientId: ID
    client: User
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
    # NOTE: user query done
    listUsers: [User!]
    getUser(id: ID!): User
    # NOTE: project query done
    listProjects: [Project!]
    getProject(id: ID!): Project
    getProjectBySlug(slug: String!): Project
    # NOTE: category query done
    listCategories: [Category!]
    getCategory(id: ID!): Category
    # NOTE: tag query done
    listTags: [Tag!]
    getTag(id: ID!): Tag
  }

  input CreateCategoryInput {
    name: String!
  }

  input CreateTagInput {
    name: String!
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
    slug: String!
    categoriesId: [ID!]!
    des: String
    tagsId: [ID!]
    rank: Float!
    ratings: Float
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
    slug: String
    categoriesId: [ID!]
    des: String
    tagsId: [ID!]
    rank: Float
    ratings: Float
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
    # NOTE: Category mutation done
    createCategory(input: CreateCategoryInput!): Category
    updateCategory(id: ID!, input: CreateCategoryInput!): Category
    deleteCategory(id: ID!): Category
    # NOTE: Tag mutation done
    createTag(input: CreateTagInput!): Tag
    updateTag(id: ID!, input: CreateTagInput!): Tag
    deleteTag(id: ID!): Tag
    # NOTE: user mutation done
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    updateUserRole(id: ID!, input: UpdateUserRoleInput!): User
    deleteUser(id: ID!): User
    # NOTE: projects mutation done
    createProject(input: CreateProjectInput!): Project
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = { typeDefs };
