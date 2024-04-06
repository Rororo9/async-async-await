import json from '../parser.js';
import read from '../reader.js';

test('ok', async () => {
  async function main() {
    const resultRead = await read();
    const resultJson = await json(resultRead);
    return JSON.parse(resultJson);
  };

  const data = await main();
  expect(data).toEqual({id: 9, created: 1546300800, userInfo: {id: 1, name: 'Hitman', level: 10, points: 2000}});
});

test('error', async () => {
  async function mainWithError() {
    try {
      const resultRead = await read();
      const resultJson = await json('invalid');
      return JSON.parse(resultJson);
    } catch (error) {
      return 'error';
    }
  };

  const dataWithError = await mainWithError();
  expect(dataWithError).toBe('error');
});


