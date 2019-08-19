// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

const errors = require('@feathersjs/errors');

module.exports = function (options = {}) {
  return async context => {
    try {
      var toy = await context.app.service('toys').get('5d58165be2b2962c54adc490');
    } catch (e) {
      const noToyFoundError = new errors.NotFound({
        descripyion: 'This is a custom error description',
        errorType: 'ToyNotFound'
      });
      return Promise.reject(noToyFoundError);
    }
    return context;
  };
};
