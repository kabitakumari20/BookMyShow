const { errorHandler } = require('../helpers/errorHandling.helper');
const {logger} = require('../helpers/logger')


exports.wrapAsync = fn => {
  return (req, res) => {
    return fn(req, res)
      .then(r => {
        logger.info(`Successful response: ${r.status}`);
        res.status(200).send(r);
      })
      .catch(err => {
        logger.error(err);
        const response = errorHandler(err);
        res.status(response.status).send(response);
      });
  };
};