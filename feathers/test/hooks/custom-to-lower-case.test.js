const feathers = require('@feathersjs/feathers');
const customToLowerCase = require('../../src/hooks/custom-to-lower-case');

describe('\'customToLowerCase\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: customToLowerCase()
    });
  });

  it('runs the hook', async () => {
    expect.assertions(1);
    const result = await app.service('dummy').get('test');
    expect(result).toEqual({ id: 'test' });
  });
});
