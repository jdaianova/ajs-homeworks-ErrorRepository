import CodesErrors from '../ErrorRepository';

test.each([
  [2,2], [1,1],
])('describe of error', (code, expected) => {
  expect(code).toBe(expected);
});
