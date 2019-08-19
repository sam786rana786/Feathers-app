// Initializes the `toys` service on path `/toys`
const createService = require('feathers-mongoose');
const createModel = require('../../models/toys.model');
const hooks = require('./toys.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/toys', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('toys');

  service.hooks(hooks);
};
