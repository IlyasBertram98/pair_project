const bcrypt = require("bcryptjs");

const passwordHasher = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = passwordHasher;
