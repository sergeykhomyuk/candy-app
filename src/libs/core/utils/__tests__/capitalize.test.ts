import capitalize from '../capitalize';

test('should return value unchanged if it is empty', () => {
  const value = '';
  const expected = value;

  const result = capitalize(value);

  expect(result).toBe(expected);
});

test('should capitalize first letter', () => {
  const value = 'f';
  const expected = 'F';

  const result = capitalize(value);

  expect(result).toBe(expected);
});

test('should change only the first letter', () => {
  const value = 'foo baR';
  const expected = 'Foo baR';

  const result = capitalize(value);

  expect(result).toBe(expected);
});
