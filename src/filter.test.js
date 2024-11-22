import filter from './filter';
import {jest} from '@jest/globals';


describe('filter', () => {
    test('filters an array of objects based on a predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ user: 'barney', active: true }]);
    });

    test('filters an array of numbers based on a predicate', () => {
        const numbers = [1, 2, 3, 4];
        const result = filter(numbers, (num) => num % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    test('returns an empty array if no elements match the predicate', () => {
        const numbers = [1, 3, 5];
        const result = filter(numbers, (num) => num % 2 === 0);
        expect(result).toEqual([[]]);
    });

    test('returns an empty array when provided an empty array', () => {
        const result = filter([], () => true);
        expect(result).toEqual([[]]);
    });

    test('returns an empty array when provided a null array', () => {
        const result = filter(null, () => true);
        expect(result).toEqual([[]]);
    });

    test('returns an empty array when provided an undefined array', () => {
        const result = filter(undefined, () => true);
        expect(result).toEqual([[]]);
    });

    test('handles a predicate that always returns true', () => {
        const numbers = [1, 2, 3];
        const result = filter(numbers, () => true);
        expect(result).toEqual([1, 2, 3]);
    });

    test('handles a predicate that always returns false', () => {
        const numbers = [1, 2, 3];
        const result = filter(numbers, () => false);
        expect(result).toEqual([[]]);
    });

    test('passes the correct arguments to the predicate function', () => {
        const mockPredicate = jest.fn();
        const numbers = [1, 2];
        filter(numbers, mockPredicate);
        expect(mockPredicate).toHaveBeenNthCalledWith(1, 1, 0, numbers);
        expect(mockPredicate).toHaveBeenNthCalledWith(2, 2, 1, numbers);
    });

    test('handles non-array inputs gracefully', () => {
        const result = filter('string', () => true);
        expect(result).toEqual(['s','t','r','i','n','g']);
    });

    test('throws an error if the predicate is not a function', () => {
        const array = [1, 2, 3];
        expect(() => filter(array, null)).toThrow(TypeError);
        expect(() => filter(array, 123)).toThrow(TypeError);
    });
});
