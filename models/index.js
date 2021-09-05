const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

module.exports = { User, Post, Comment };
