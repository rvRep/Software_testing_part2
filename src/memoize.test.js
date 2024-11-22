import memoize from './memoize';
import {jest} from '@jest/globals';


describe('memoize', () => {
    test('memoizes the result of a function with a single argument', () => {
        const mockFunc = jest.fn((x) => x * 2);
        const memoized = memoize(mockFunc);

        expect(memoized(2)).toBe(4);
        expect(mockFunc).toHaveBeenCalledTimes(1);

        // Second call with the same argument should use the cache
        expect(memoized(2)).toBe(4);
        expect(mockFunc).toHaveBeenCalledTimes(1);
    });

    test('memoizes the result of a function with multiple arguments using a custom resolver', () => {
        const mockFunc = jest.fn((x, y) => x + y);
        const resolver = jest.fn((x, y) => `${x},${y}`);
        const memoized = memoize(mockFunc, resolver);

        expect(memoized(2, 3)).toBe(5);
        expect(mockFunc).toHaveBeenCalledTimes(1);
        expect(resolver).toHaveBeenCalledTimes(1);

        // Call with the same arguments should use the cache
        expect(memoized(2, 3)).toBe(5);
        expect(mockFunc).toHaveBeenCalledTimes(1);
        expect(resolver).toHaveBeenCalledTimes(2); // Resolver is always called
    });

    test('allows access to the cache property', () => {
        const mockFunc = jest.fn((x) => x + 1);
        const memoized = memoize(mockFunc);

        memoized(3); // First call
        expect(memoized.cache.has(3)).toBe(true);
        expect(memoized.cache.get(3)).toBe(4);

        // Manually set cache value
        memoized.cache.set(3, 10);
        expect(memoized(3)).toBe(10); // Uses manually set value
    });

    test('supports replacing the default cache', () => {
        memoize.Cache = WeakMap;

        const mockFunc = jest.fn((x) => x + 1);
        const memoized = memoize(mockFunc);

        const obj = { key: 'value' };
        memoized(obj);

        expect(memoized.cache instanceof WeakMap).toBe(true);
        expect(memoized.cache.has(obj)).toBe(true);

        // Restore default cache
        memoize.Cache = Map;
    });

    test('throws an error if the first argument is not a function', () => {
        expect(() => memoize(null)).toThrow(TypeError);
        expect(() => memoize(123)).toThrow(TypeError);
        expect(() => memoize({})).toThrow(TypeError);
    });

    test('throws an error if the resolver is not a function', () => {
        const mockFunc = jest.fn((x) => x * 2);
        expect(() => memoize(mockFunc, 123)).toThrow(TypeError);
        expect(() => memoize(mockFunc, {})).toThrow(TypeError);
    });

    test('handles undefined resolver gracefully', () => {
        const mockFunc = jest.fn((x) => x + 1);
        const memoized = memoize(mockFunc);

        expect(memoized(3)).toBe(4);
        expect(memoized(3)).toBe(4); // Uses cache
    });

    test('works with falsy keys in cache', () => {
        const mockFunc = jest.fn((x) => x || 'default');
        const memoized = memoize(mockFunc);

        expect(memoized(0)).toBe('default');
        expect(memoized(null)).toBe('default');
        expect(memoized(undefined)).toBe('default');

        expect(mockFunc).toHaveBeenCalledTimes(3);
        expect(memoized(0)).toBe('default'); // Cached
        expect(memoized(null)).toBe('default'); // Cached
        expect(mockFunc).toHaveBeenCalledTimes(3);
    });
});
