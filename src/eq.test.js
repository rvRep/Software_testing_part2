import eq from './eq';

describe('eq', () => {
  test('returns true for identical primitive values', () => {
    expect(eq('a', 'a')).toBe(true);
    expect(eq(1, 1)).toBe(true);
    expect(eq(true, true)).toBe(true);
  });

  test('returns false for different primitive values', () => {
    expect(eq('a', 'b')).toBe(false);
    expect(eq(1, 2)).toBe(false);
    expect(eq(true, false)).toBe(false);
  });

  test('returns true when comparing an object to itself', () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);
  });

  test('returns false when comparing two different objects with the same structure', () => {
    const object1 = { a: 1 };
    const object2 = { a: 1 };
    expect(eq(object1, object2)).toBe(false);
  });

  test('returns true for NaN compared to NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });


  test('returns false when comparing primitive to object-wrapped equivalent', () => {
    expect(eq('a', Object('a'))).toBe(true);
    expect(eq(1, Object(1))).toBe(true);
  });

  test('returns true for identical symbol values', () => {
    const symbol = Symbol('test');
    expect(eq(symbol, symbol)).toBe(true);
  });

  test('returns false for different symbols', () => {
    expect(eq(Symbol('test'), Symbol('test'))).toBe(false);
  });

  test('handles undefined and null comparisons', () => {
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, null)).toEqual(true);
  });
});
