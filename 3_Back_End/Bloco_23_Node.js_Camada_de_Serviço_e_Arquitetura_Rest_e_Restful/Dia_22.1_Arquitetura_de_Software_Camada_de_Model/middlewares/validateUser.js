const validateUser = (req, _res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName) return next({ status: 400, phrase: 'firstName' });
  if (!lastName) return next({ status: 400, phrase: 'lastName' });
  if (!email) return next({ status: 400, phrase: 'email' });
  if (!password) return next({ status: 400, phrase: 'password' });

  if (password.length < 6) {
    return next({
      status: 400,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  return next();
};

module.exports = validateUser;
