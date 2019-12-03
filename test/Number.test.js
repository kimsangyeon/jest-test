const sum = require('../src/sum');

test('sum a + b', () => {
  expect(sum(2, 2)).toBeGreaterThan(3);
  expect(sum(2, 2)).toBeGreaterThanOrEqual(3.5);
  expect(sum(2, 2)).toBeGreaterThanOrEqual(4);
  expect(sum(2, 2)).toBeLessThan(5);
  expect(sum(2, 2)).toBeLessThanOrEqual(4.5);
  expect(sum(2, 2)).toBeLessThanOrEqual(4);

  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 2)).toEqual(4);
});

test('sum floating a + b', () => {
  // expect(sum(0.1, 0.2)).toBe(0.3);  // round error 0.30000000000000004 
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});
