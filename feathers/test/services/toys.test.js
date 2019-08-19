const app = require('../../src/app');

describe('\'toys\' service', () => {
  it('registered the service', () => {
    const service = app.service('toys');
    expect(service).toBeTruthy();
  });
});
