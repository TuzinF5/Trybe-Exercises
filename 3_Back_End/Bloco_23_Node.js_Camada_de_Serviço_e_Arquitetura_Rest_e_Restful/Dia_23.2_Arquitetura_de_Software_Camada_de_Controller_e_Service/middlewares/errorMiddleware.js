const errorMiddleware = (err, _req, res, _next) => {
  const { error, status } = err;

  return res.status(status).json({ error });
};

module.exports = errorMiddleware;
