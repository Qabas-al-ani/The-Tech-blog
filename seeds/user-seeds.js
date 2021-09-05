const { User } = require("../models");

const userData = [
  {
    username: "Xandromus",
    password: "12345678",
  },
  {
    username: "Lernantino",
    password: "01234567",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
