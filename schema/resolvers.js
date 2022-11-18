const Category = require('../models/Category');
const People = require('../models/People');
const Project = require('../models/project');
const Tag = require('../models/Tag');

const resolvers = {
  Query: {
    // NOTE: categories query resolvers done
    listCategories: async () => {
      const categories = await Category.find({});
      console.log(categories);
      return categories;
    },
    getCategory: async (parent, args) => {
      return await Category.findById(args.id);
    },
    // NOTE: tags query resolvers done
    listTags: async () => {
      return await Tag.find({});
    },
    getTag: async (parent, args) => {
      return await Tag.findById(args.id);
    },
    // NOTE: user query resolvers done
    listUsers: async () => {
      return await People.find({});
    },
    getUser: async (parent, args) => {
      return await People.findById(args.id);
    },
    // NOTE: project query resolvers done
    listProjects: async () => {
      return await Project.find({});
    },
    getProject: async (parent, args) => {
      return await Project.findById(args.id);
    },
    getProjectBySlug: async (parent, args) => {
      return await Project.find({ slug: args.slug });
    },
  },

  // POPULATE: getting population data using  graphQL query
  Tag: {
    projects: async (parent) => {
      return await Project.find({ _id: { $in: parent.projectsId } });
    },
  },
  Category: {
    projects: async (parent) => {
      return await Project.find({ _id: { $in: parent.projectsId } });
    },
  },
  Project: {
    categories: async (parent) => {
      return await Category.find({ _id: { $in: parent.categoriesId } });
    },
    tags: async (parent) => {
      return await Tag.find({ _id: { $in: parent.tagsId } });
    },
    client: async (parent) => {
      return await People.findById(parent.clientId);
    },
  },

  // graphQL mutation
  Mutation: {
    // NOTE: category mutation resolve start
    createCategory: async (parent, args) => {
      const newCategory = new Category({
        name: args.input.name,
      });
      return await newCategory.save();
    },
    updateCategory: async (parent, args) => {
      const updateCategory = new Category({
        _id: args.id,
        name: args.input.name,
      });
      return await Category.findOneAndUpdate({ _id: args.id }, updateCategory, {
        new: true,
      });
    },
    deleteCategory: async (parent, args) => {
      return await Category.findByIdAndDelete(args.id);
    },
    // NOTE: category mutation resolve done
    // NOTE: tag mutation resolve start
    createTag: async (parent, args) => {
      const newTag = new Tag({
        name: args.input.name,
      });
      return await newTag.save();
    },
    updateTag: async (parent, args) => {
      const updateTag = new Tag({
        _id: args.id,
        name: args.input.name,
      });
      return await Tag.findOneAndUpdate({ _id: args.id }, updateTag, {
        new: true,
      });
    },
    deleteTag: async (parent, args) => {
      return await Tag.findByIdAndDelete(args.id);
    },
    // NOTE: tag mutation resolve done
    // NOTE: user mutation resolve start
    createUser: async (parent, args) => {
      const newUser = new People({
        name: args.input.name,
        email: args.input.email,
        password: args.input.password,
        avatar: args.input.avatar || '',
        role: args.input.role,
        phone: args.input.phone || '',
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
    // NOTE: user mutation resolve done
    // NOTE: project mutation resolve start
    createProject: async (parent, args) => {
      const newProject = new Project({
        name: args.input.name,
        slug: args.input.slug,
        categoriesId: args.input.categoriesId,
        des: args.input.des || '',
        tagsId: args.input.tagsId || null,
        status: args.input.status,
        rank: args.input.rank,
        ratings: args.input.ratings || null,
        clientId: args.input.clientId,
        live_site: args.input.live_site || '',
        client_repo: args.input.client_repo || '',
        server_repo: args.input.server_repo || '',
        thumb_img: args.input.thumb_img || '',
        sub_img: args.input.sub_img || null,
      });
      const project = await newProject.save();

      // NOTE: update category projectsId to get project data
      if (project?.categoriesId?.length > 0) {
        project.categoriesId.forEach(async (category_id) => {
          await Category.updateOne(
            { _id: category_id },
            { $push: { projectsId: project._id } }
          );
        });
      }

      // NOTE: update category projectsId to get project data
      if (project?.tagsId?.length > 0) {
        project.tagsId.forEach(async (tag_id) => {
          await Tag.updateOne(
            { _id: tag_id },
            { $push: { projectsId: project._id } }
          );
        });
      }

      return project;
    },
    updateProject: async (parent, args) => {
      const updateProjectInfo = new Project({
        _id: args.id,
        name: args.input.name,
        slug: args.input.slug,
        categoriesId: args.input.categoriesId,
        des: args.input.des,
        tagsId: args.input.tagsId,
        rank: args.input.rank,
        ratings: args.input.ratings,
        status: args.input.status,
        clientId: args.input.clientId,
        live_site: args.input.live_site,
        client_repo: args.input.client_repo,
        server_repo: args.input.server_repo,
        thumb_img: args.input.thumb_img,
        sub_img: args.input.sub_img,
      });
      const updateProject = await Project.findOneAndUpdate(
        { _id: args.id },
        updateProjectInfo,
        {
          new: true,
        }
      );

      // NOTE: update category projectsId to get updateProject data
      if (updateProject?.categoriesId?.length > 0) {
        updateProject.categoriesId.forEach(async (category_id) => {
          await Category.updateOne(
            { _id: category_id },
            { $addToSet: { projectsId: updateProject._id } }
          );
        });
      }

      // NOTE: update tag projectsId to get updateProject data
      if (updateProject?.tagsId?.length > 0) {
        updateProject.tagsId.forEach(async (tag_id) => {
          await Tag.updateOne(
            { _id: tag_id },
            { $addToSet: { projectsId: updateProject._id } }
          );
        });
      }

      return updateProject;
    },
    deleteProject: async (parent, args) => {
      const project = await Project.findByIdAndDelete(args.id);
      // NOTE: removing projectsId from category
      if (project?.categoriesId?.length > 0) {
        project.categoriesId.forEach(async (category_id) => {
          await Category.updateOne(
            { _id: category_id },
            { $pull: { projectsId: project._id } }
          );
        });
      }

      // NOTE: removing projectsId from tag
      if (project?.tagsId?.length > 0) {
        project.tagsId.forEach(async (tag_id) => {
          await Tag.updateOne(
            { _id: tag_id },
            { $pull: { projectsId: project._id } }
          );
        });
      }

      return project;
    },
    // NOTE: project mutation resolve done
  },
};

module.exports = { resolvers };
