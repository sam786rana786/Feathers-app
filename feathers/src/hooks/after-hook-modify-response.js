// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    var toy = await context.app.service('toys').get('5d58165be2b2962c54adc490');
    context.result.customResponse = "Adding a custom response back to the client";
    return context;
  };
};
