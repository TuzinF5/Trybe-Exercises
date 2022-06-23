const middlewareError = (err, _req, res, _next) => {
  if (err.message) {
    return res.status(err.status).json({
      error: true,
      message: err.message,
    });
  }

  return res.status(err.status).json({
    error: true,
    message: `O campo '${err.phrase}' é obrigatório`,
  });
};

module.exports = middlewareError;
