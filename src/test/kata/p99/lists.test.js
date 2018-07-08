import find_last from 'kata/p99/lists'

test('find last', () => {
  expect(find_last([1,2,3])).toBe(3);
  expect(find_last(['a','b','c'])).toBe('c');
});