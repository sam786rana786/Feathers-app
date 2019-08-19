

const customToLowerCase = require('../../hooks/custom-to-lower-case');
const asyncHook = require('../../hooks/async-hook');
const afterHookModifyResponse = require('../../hooks/after-hook-modify-response');
const testingErrorHook = require('../../hooks/testing-error-hook');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [customToLowerCase('toyName', 'toyColor'), asyncHook()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [afterHookModifyResponse()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [testingErrorHook()],
    update: [],
    patch: [],
    remove: []
  }
};
