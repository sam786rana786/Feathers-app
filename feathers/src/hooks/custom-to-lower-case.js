// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (...fieldNames) {
  return async context => {
    if( fieldNames.length > 0 ) {
      fieldNames.forEach((field) => {
        context.data[field] = context.data[field].toLowerCase();
      });
    }
    return context;
  };
};
