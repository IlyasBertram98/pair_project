function setSession(req, user) {
  const { id, username, role } = user;
  req.session.user = {
    id,
    username,
    role,
  };
}

module.exports = setSession;
