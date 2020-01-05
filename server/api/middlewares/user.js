const userSchema = require('../validators/user');

exports.createValidator = (req, res, next) => {
  const { error } = userSchema.createUserValidator.validate(req.body);

  if (!error) return next();

  res.status(400).send({ error: prettyErrors(error) });
};

exports.loginValidator = (req, res, next) => {
  const { error } = userSchema.loginUserValidator.validate(req.body);

  if (!error) return next();

  res.status(400).send({ error: prettyErrors(error) });
};

exports.updateValidator = (req, res, next) => {
  const { error } = userSchema.updateUserValidator.validate(req.body);

  if (!error) return next();

  res.status(400).send({ error: prettyErrors(error) });
};

function prettyErrors(error) {
  return error.details.map(detail => detail.message);
}
