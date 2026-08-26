const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const defaultBlogs = require("./config/defaultBlogs.js");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    for (const category of Object.keys(defaultBlogs)) {
      for (const blog of defaultBlogs[category]) {
        // Remove _id to let Mongo generate a proper ObjectId
        const { _id, ...blogData } = blog;

        // Avoid duplicate insertion by title + category
        const exists = await Blog.findOne({ title: blog.title, category });
        if (!exists) {
          await Blog.create({ ...blogData, category });
        }
      }
    }

    console.log("Default blogs seeded!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
