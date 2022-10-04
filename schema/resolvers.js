const People = require("../models/People");
const Project = require("../models/project");
const { userList, movieList } = require("../sampleData");

const resolvers = {
  Query: {
    // HACK: user query resolvers done
    listUsers: async () => {
      return await People.find({});
    },
    getUser: async (parent, args) => {
      return await People.findById(args.id);
    },
    // HACK: project query resolvers done
    listProjects: async () => {
      return await Project.find({});
    },
    getProject: async (parent, args) => {
      return await Project.findById(args.id);
    },
  },

  // graphQL mutation
  Mutation: {
    // HACK: user mutation resolve done
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
    // HACK: project mutation resolve done
    createProject: async (parent, args) => {
      const newProject = new Project({
        name: args.input.name,
        categories: args.input.categories,
        des: args.input.des || null,
        tags: args.input.tags || null,
        status: args.input.status,
        clientId: args.input.clientId,
        live_site: args.input.live_site || "",
        client_repo: args.input.client_repo || "",
        server_repo: args.input.server_repo || "",
        thumb_img: args.input.thumb_img || "",
        sub_img: args.input.sub_img || null,
      });
      return await newProject.save();
    },
    updateProject: async (parent, args) => {
      const updateProjectInfo = new Project({
        _id: args.id,
        name: args.input.name,
        categories: args.input.categories,
        des: args.input.des || null,
        tags: args.input.tags || null,
        status: args.input.status,
        clientId: args.input.clientId,
        live_site: args.input.live_site || "",
        client_repo: args.input.client_repo || "",
        server_repo: args.input.server_repo || "",
        thumb_img: args.input.thumb_img || "",
        sub_img: args.input.sub_img || null,
      });
      return await Project.findOneAndUpdate(
        { _id: args.id },
        updateProjectInfo,
        {
          new: true,
        }
      );
    },
    deleteProject: async (parent, args) => {
      return await Project.findByIdAndDelete(args.id);
    },
  },
};

module.exports = { resolvers };
