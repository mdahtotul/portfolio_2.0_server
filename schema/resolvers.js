const People = require("../models/People");
const { userList, movieList } = require("../sampleData");

const resolvers = {
  Query: {
    listUsers: async () => {
      return await People.find({});
    },
    getUser: async (parent, args) => {
      return await People.findById(args.id);
    },
    listMovies: async () => {
      return movieList;
    },
    getMovie: async (parent, args) => {
      const movie = await movieList.find((x) => x.id === args.id);
      return movie;
    },
    getMoviesByName: async (parent, args) => {
      const movies = await movieList.filter((x) =>
        x.name.toLowerCase().includes(args.name.toLowerCase())
      );
      return movies;
    },
  },
  User: {
    favoriteMovies: async (parent) => {
      return movieList.filter((x) => x.year >= 2000 && x.year <= 2020);
    },
  },

  // graphQL mutation
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = new People({
        name: args.input.name,
        email: args.input.email,
        password: args.input.password,
        avatar: args.input.avatar || "",
        role: args.input.role,
        phone: args.input.phone || "",
      });
      return await newUser.save();
    },
    updateUser: async (parent, args) => {
      const updatedUserInfo = new People({
        _id: args.id,
        name: args.input.name,
        password: args.input.password,
        avatar: args.input.avatar,
        phone: args.input.phone,
      });

      return await People.findOneAndUpdate({ _id: args.id }, updatedUserInfo, {
        new: true,
      });
    },
    updateUserRole: async (parent, args) => {
      const updatedUserRole = new People({
        _id: args.id,
        role: args.input.role,
      });

      return await People.findOneAndUpdate({ _id: args.id }, updatedUserRole, {
        new: true,
      });
    },
    deleteUser: async (parent, args) => {
      return await People.findByIdAndDelete(args.id);
    },
  },
};

module.exports = { resolvers };
