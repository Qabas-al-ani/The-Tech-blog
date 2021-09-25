const { User } = require("../models");

const userData = [
  {
    username: "qabas",
    password: "12345678",
  },
  {
    username: "alani",
    password: "01234567",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
