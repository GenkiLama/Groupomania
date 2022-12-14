const Post = require("../models/Post");
const mongoose = require("mongoose");

const hasPermission = async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) {
    return res.status(400).json({
      message: "post does not exist",
    });
  }
  if (post.userId === req.auth.userId || req.auth.role === "admin") {
    next();
  } else {
    return res.status(401).json({
      message: "pas autorise",
    });
  }
};
module.exports = {
  hasPermission,
};
