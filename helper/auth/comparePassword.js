const bcrypt = require("bcryptjs");

function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = comparePassword;
