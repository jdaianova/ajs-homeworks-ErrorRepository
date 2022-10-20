import { CodesErrors, translate } from '../ErrorRepository';

const error1 = new CodesErrors(1, 'error1');
const error2 = new CodesErrors(2, 'error2');
const error3 = new CodesErrors(3, 'error3');

test.each([
  [2, 'error2'],
  [3, 'error3'],
  [1, 'error1'],
  [4, 'Unknown error'],
])('describe of error', (code, expected) => {
  expect(translate(code)).toBe(expected);
});
