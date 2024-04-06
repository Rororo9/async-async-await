import read from './reader.js';
import json from './parser.js';

(async () => {
  try {
    const data = await read();
    const result = await json(data);
    console.log(result);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
