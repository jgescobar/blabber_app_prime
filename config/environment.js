var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Blabber',
  SAFE_TITLE: 'blabber_app_prime'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
