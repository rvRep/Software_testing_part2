import castArray from './castArray';

describe('castArray', () => {
  test('wraps a single number in an array', () => {
    expect(castArray(1)).toEqual([1]);
  });

  test('wraps a single object in an array', () => {
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
  });

  test('wraps a single string in an array', () => {
    expect(castArray('abc')).toEqual(['abc']);
  });

  test('wraps null in an array', () => {
    expect(castArray(null)).toEqual([null]);
  });

  test('wraps undefined in an array', () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });

  test('returns an empty array if no arguments are provided', () => {
    expect(castArray()).toEqual([]);
  });

  test('returns the same array if an array is passed', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);  // Uses `.toBe` to check reference equality
  });

  test('wraps multiple arguments in a single array containing the first argument', () => {
    expect(castArray(1, 2, 3)).toEqual([1]);  // Only the first argument should be used
  });
});
